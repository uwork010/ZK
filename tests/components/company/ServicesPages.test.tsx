import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import ServicesOverview from "@/components/company/ServicesOverview";
import { ServiceDetailPage } from "@/components/company/CompanyPages";
import { serviceEntries } from "@/lib/company-content";

describe("Services overview", () => {
  it("renders all 12 service cards with three tags and canonical detail links", () => {
    render(<ServicesOverview />);

    expect(screen.getByRole("heading", { level: 1, name: "Technology, Design, and Creative Expertise." })).toBeInTheDocument();
    const cards = within(screen.getByRole("region", { name: "All services" })).getAllByRole("article");
    expect(cards).toHaveLength(12);

    serviceEntries.forEach((service, index) => {
      const card = within(cards[index]);
      expect(card.getByRole("heading", { name: service.title })).toBeInTheDocument();
      expect(card.getByText(service.summary)).toBeInTheDocument();
      expect(within(card.getByRole("list", { name: `${service.title} tags` })).getAllByRole("listitem")).toHaveLength(3);
      expect(card.getByRole("link", { name: "Explore Service" })).toHaveAttribute("href", `/services/${service.slug}`);
    });

    expect(screen.getByRole("link", { name: /start a project/i })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: /chat on whatsapp/i })).toHaveAttribute("href", expect.stringContaining("https://wa.me/923705752100?text="));
  });
});

describe("Service detail", () => {
  it("renders the required service sections, WhatsApp action, and final contact CTA", () => {
    const service = serviceEntries[0];
    render(<ServiceDetailPage entry={service} />);

    expect(screen.getByRole("heading", { level: 1, name: service.heroTitle })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What We Offer" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Technologies & Tools" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Types of Projects We Build" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Our Process" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Problems We Solve" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Related Services" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Benefits" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Example Use Cases" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Frequently Asked Questions" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /chat on whatsapp/i })).toHaveLength(2);
    expect(screen.getByRole("link", { name: "Get a Quote" })).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: "Email Us" })).toHaveAttribute("href", "mailto:uwork428@gmail.com");

    const question = screen.getByText("Can you work with an existing website?");
    expect(question.closest("details")?.querySelector("summary")).toHaveTextContent(question.textContent ?? "");
    expect(screen.getByText(/improve, rebuild, or extend an existing web product/i)).toBeInTheDocument();
  });
});