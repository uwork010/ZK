import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectInquiryForm from "@/components/sections/ProjectInquiryForm";

const fetchMock = vi.fn();

beforeEach(() => {
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

async function fillRequiredFields(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/full name/i), "Ada Lovelace");
  await user.type(screen.getByLabelText(/work email/i), "ada@example.com");
  await user.type(
    screen.getByLabelText(/project details/i),
    "I would love to discuss a new digital product.",
  );
}

describe("<ProjectInquiryForm />", () => {
  it("renders required fields, optional project selectors, and inquiry action", () => {
    render(<ProjectInquiryForm />);

    expect(screen.getByLabelText(/full name/i)).toBeRequired();
    expect(screen.getByLabelText(/work email/i)).toBeRequired();
    expect(screen.getByLabelText(/project details/i)).toBeRequired();
    expect(screen.getByLabelText(/company/i)).not.toBeRequired();
    expect(screen.getByRole("button", { name: /send project inquiry/i })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "E-commerce Development" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "$25,000+" })).toBeInTheDocument();
  });

  it("validates the required fields without submitting invalid data", async () => {
    const user = userEvent.setup();
    render(<ProjectInquiryForm />);

    await user.click(screen.getByRole("button", { name: /send project inquiry/i }));

    expect(await screen.findByText(/name must be at least 2/i)).toBeInTheDocument();
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    expect(screen.getByText(/message must be at least 10/i)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("sends selected project details and confirms only an accepted response", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ ok: true }),
    });
    const user = userEvent.setup();
    render(<ProjectInquiryForm />);
    await fillRequiredFields(user);
    await user.type(screen.getByLabelText(/company/i), "Analytical Engines");
    await user.selectOptions(screen.getByLabelText(/project type/i), "Web Development");
    await user.selectOptions(screen.getByLabelText(/estimated budget/i), "$5,000–$10,000");
    await user.click(screen.getByRole("button", { name: /send project inquiry/i }));

    expect(await screen.findByText(/thanks for reaching out/i)).toBeInTheDocument();
    const request = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(request).toEqual(expect.objectContaining({
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines",
      projectType: "Web Development",
      budget: "$5,000–$10,000",
    }));
  });

  it("offers the direct email route when delivery fails", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Could not send message. Please try again later." }),
    });
    const user = userEvent.setup();
    render(<ProjectInquiryForm />);
    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: /send project inquiry/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/email us directly at uwork428@gmail.com/i);
    expect(screen.queryByText(/thanks for reaching out/i)).not.toBeInTheDocument();
  });

  it("keeps the submit action disabled while a request is pending", async () => {
    let resolve!: (value: unknown) => void;
    fetchMock.mockReturnValueOnce(new Promise((complete) => {
      resolve = complete;
    }));
    const user = userEvent.setup();
    render(<ProjectInquiryForm />);
    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: /send project inquiry/i }));

    expect(await screen.findByRole("button", { name: /sending inquiry/i })).toBeDisabled();
    resolve({ ok: true, json: async () => ({ ok: true }) });
    await waitFor(() => {
      expect(screen.getByText(/thanks for reaching out/i)).toBeInTheDocument();
    });
  });
});
