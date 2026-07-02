import { PageHeader } from "@/components/page-header";
import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="Sidan hittades inte"
        lead="Sidan du letar efter finns inte eller har flyttat."
      />
      <section className="bg-paper py-20">
        <Container className="flex flex-wrap gap-4">
          <Button href="/" withArrow className="!text-ink">
            Till startsidan
          </Button>
          <Button
            href="/tjanster"
            variant="ghost"
            className="!text-navy !border-navy/25 hover:!bg-navy/5"
          >
            Se våra tjänster
          </Button>
        </Container>
      </section>
    </>
  );
}
