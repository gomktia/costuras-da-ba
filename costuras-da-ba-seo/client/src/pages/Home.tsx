/**
 * Costuras da Bá — Landing Page
 * Costureira artesanal em Moradas, Santa Maria, RS
 *
 * Paleta: Verde Bebê oklch(0.72 0.08 155), Verde Musgo oklch(0.58 0.08 155),
 *         Creme #FAFAF7, Carvão Esverdeado oklch(0.30 0.02 155)
 * Fontes: DM Serif Display (títulos) + DM Sans (corpo)
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Logo } from "@/components/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Scissors,
  Star,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Send,
} from "lucide-react";

// ─── Constants ───────────────────────────────────────────────

const WHATSAPP_NUMBER = "5524992035263";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de um orçamento para ")}`;
const PHONE_NUMBER = "+5524992035263";

const BRAND = {
  green: "oklch(0.72 0.08 155)",       // Verde bebê principal
  greenDark: "oklch(0.58 0.08 155)",   // Verde musgo — acentos
  charcoal: "oklch(0.30 0.02 155)",    // Carvão esverdeado — textos
};

const NAV_ITEMS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const SERVICES = [
  {
    icon: <Scissors size={28} />,
    title: "Reparos de Roupas",
    description:
      "Sua roupa favorita caindo perfeitamente no corpo. Barra, cintura, comprimento, troca de zíper e reparos diversos com acabamento impecável.",
    color: BRAND.green,
  },
  {
    icon: <Star size={28} />,
    title: "Reparo de Fardas Militares",
    description:
      "Consertos e ajustes especializados em fardas e uniformes militares. Troca de divisas, patches, barras e reparos com precisão e respeito ao padrão exigido.",
    color: BRAND.greenDark,
  },
];

const TESTIMONIALS = [
  {
    name: "Maria S.",
    text: "Excelente trabalho! Meu vestido ficou perfeito, exatamente como eu imaginei. A Bá tem mãos de ouro!",
    rating: 5,
  },
  {
    name: "João P.",
    text: "Rápido, eficiente e com muito cuidado. Levei uma calça que achava que não tinha mais jeito e voltou como nova.",
    rating: 5,
  },
  {
    name: "Ana C.",
    text: "Levei a farda do meu marido pra ajustar e ficou perfeita! Trabalho impecável e no prazo. Voltarei com certeza.",
    rating: 5,
  },
];

const STEPS = [
  {
    number: "1",
    title: "Entre em contato",
    description: "Envie uma mensagem pelo WhatsApp com o que precisa.",
    icon: <MessageCircle size={24} />,
  },
  {
    number: "2",
    title: "Avaliação",
    description: "Traga sua peça para avaliação e orçamento sem compromisso.",
    icon: <Scissors size={24} />,
  },
  {
    number: "3",
    title: "Entrega",
    description: "Receba sua roupa pronta no prazo combinado.",
    icon: <Send size={24} />,
  },
];

const FAQ_ITEMS = [
  {
    q: "Quanto custa um ajuste de roupa?",
    a: "O valor varia de acordo com o tipo de serviço. Entre em contato pelo WhatsApp para um orçamento personalizado e sem compromisso.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "A maioria dos ajustes e reparos fica pronta em 3 a 7 dias úteis. O prazo pode variar conforme o serviço.",
  },
  {
    q: "Onde fica a Costuras da Bá?",
    a: "Estamos na Rua Pedro Santini, 3497, Casa 15, Quadra D, no bairro Moradas em Santa Maria, RS.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Aceitamos Pix, dinheiro e cartão de crédito/débito.",
  },
  {
    q: "Preciso agendar horário?",
    a: "Não é obrigatório, mas recomendamos agendar pelo WhatsApp para garantir atendimento no horário que preferir.",
  },
  {
    q: "Vocês fazem ajustes em roupas masculinas?",
    a: "Sim! Trabalhamos com ajustes e reparos em roupas femininas, masculinas e infantis.",
  },
];

// ─── Animation helpers ───────────────────────────────────────

function Section({
  children,
  className = "",
  id,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      id={id}
      style={style}
    >
      {children}
    </motion.section>
  );
}

// ─── WhatsApp SVG Icon ───────────────────────────────────────

function WhatsAppIcon({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center group transition-transform group-hover:scale-105">
            <Logo variant="horizontal" size={36} />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: BRAND.green }}
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-4 py-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-white mt-2"
                style={{ background: BRAND.green }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsAppIcon size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background photo — máquina de costura (Unsplash, free license) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-sewing.jpg')`,
          }}
        />
        {/* Green-tinted overlay for brand consistency + text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${BRAND.charcoal}ee 0%, oklch(0.30 0.06 155 / 0.75) 40%, oklch(0.45 0.07 155 / 0.60) 100%)`,
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="stitch-line w-16 mb-6" />
            <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
              Costura Artesanal em Santa Maria
            </p>
            <h1
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Cada ponto feito com carinho, cada peça feita pra você
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
              Reparos de roupas e fardas militares com dedicação e
              atenção aos detalhes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "#25D366" }}
              >
                <WhatsAppIcon size={20} />
                Peça seu Orçamento
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-medium text-white border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Conheça nossos serviços
                <ChevronDown size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAR ─── */}
      <Section className="relative -mt-6 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-border px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {[
              { value: "15+", label: "Anos de experiência" },
              { value: "2.000+", label: "Clientes atendidos" },
              { value: "⭐ 4.9", label: "Avaliação Google" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: BRAND.green,
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SERVIÇOS ─── */}
      <Section
        id="servicos"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-[0.15em] font-medium mb-3"
              style={{ color: BRAND.green }}
            >
              O que fazemos por você
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: BRAND.charcoal,
              }}
            >
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Soluções completas em costura artesanal, sempre com carinho e
              atenção a cada detalhe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="service-card bg-white rounded-2xl shadow-sm border border-border p-8"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: service.color, color: "white" }}
                >
                  {service.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: BRAND.charcoal,
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── SOBRE ─── */}
      <Section
        id="sobre"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "oklch(0.95 0.02 90)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Placeholder foto — substituir por foto real da Bá */}
            <div className="relative">
              <div className="craft-border p-3">
                <div
                  className="aspect-[4/5] rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.9 0.04 350), oklch(0.92 0.03 65))`,
                  }}
                >
                  <div className="text-center px-8">
                    <Scissors
                      size={48}
                      style={{ color: BRAND.green }}
                      className="mx-auto mb-4 opacity-40"
                    />
                    <p className="text-sm text-muted-foreground italic">
                      Foto da Bá em breve
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl opacity-20"
                style={{ background: BRAND.greenDark }}
              />
            </div>

            <div>
              <p
                className="text-sm uppercase tracking-[0.15em] font-medium mb-3"
                style={{ color: BRAND.green }}
              >
                Nossa história
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  color: BRAND.charcoal,
                }}
              >
                Sobre a Costuras da Bá
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground">
                <p>
                  Na <strong>Costuras da Bá</strong>, cada peça é tratada com
                  o mesmo carinho e dedicação. Com mais de 15 anos de
                  experiência em costura artesanal, oferecemos serviços
                  especializados em reparos e ajustes de roupas aqui no
                  bairro <strong>Moradas</strong>, em{" "}
                  <strong>Santa Maria</strong>.
                </p>
                <p>
                  Somos referência também em{" "}
                  <strong>reparo de fardas militares</strong>, com consertos
                  precisos que respeitam o padrão e a exigência de cada
                  uniforme. Troca de divisas, patches, barras e ajustes com
                  acabamento impecável.
                </p>
                <p>
                  Conte com a nossa dedicação para manter suas roupas e fardas
                  sempre impecáveis!
                </p>
              </div>
              <div className="stitch-line w-full mt-8 mb-6" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: BRAND.green }}
              >
                Fale com a Bá pelo WhatsApp
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── COMO FUNCIONA ─── */}
      <Section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-[0.15em] font-medium mb-3"
              style={{ color: BRAND.greenDark }}
            >
              Simples assim
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: BRAND.charcoal,
              }}
            >
              Como Funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="step-connector text-center px-4"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: BRAND.green, color: "white" }}
                >
                  {step.icon}
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: BRAND.greenDark }}
                >
                  Passo {step.number}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    color: BRAND.charcoal,
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── DEPOIMENTOS ─── */}
      <Section
        id="depoimentos"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: "oklch(0.95 0.02 90)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-[0.15em] font-medium mb-3"
              style={{ color: BRAND.green }}
            >
              Histórias de quem confia no nosso trabalho
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: BRAND.charcoal,
              }}
            >
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-border p-7"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-current"
                      style={{ color: BRAND.greenDark }}
                    />
                  ))}
                </div>
                <p className="text-base text-foreground mb-4 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="stitch-line w-8 mb-3" />
                <p className="text-sm font-semibold text-muted-foreground">
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── CTA INTERMEDIÁRIO ─── */}
      <Section
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: BRAND.charcoal }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Pronta para transformar suas roupas?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Fale conosco e receba um orçamento sem compromisso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "#25D366" }}
          >
            <WhatsAppIcon size={24} />
            Chamar no WhatsApp
          </a>
        </div>
      </Section>

      {/* ─── FAQ ─── */}
      <Section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-[0.15em] font-medium mb-3"
              style={{ color: BRAND.greenDark }}
            >
              Tire suas dúvidas
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{
                fontFamily: "'DM Serif Display', serif",
                color: BRAND.charcoal,
              }}
            >
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-semibold py-5 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ─── CONTATO / LOCALIZAÇÃO ─── */}
      <Section
        id="contato"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{ background: BRAND.charcoal }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Onde Estamos
            </h2>
            <p className="text-lg text-white/60">
              Venha nos visitar ou entre em contato
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Info */}
            <div className="space-y-4">
              {[
                {
                  icon: <WhatsAppIcon size={22} />,
                  label: "WhatsApp",
                  value: "(24) 99203-5263",
                  href: WHATSAPP_URL,
                  highlight: true,
                },
                {
                  icon: <Phone size={22} />,
                  label: "Telefone",
                  value: "(24) 99203-5263",
                  href: `tel:${PHONE_NUMBER}`,
                },
                {
                  icon: <MapPin size={22} />,
                  label: "Endereço",
                  value:
                    "Rua Pedro Santini, 3497, Casa 15, Quadra D — Moradas, Santa Maria, RS",
                  href: "https://maps.google.com/?q=Rua+Pedro+Santini+3497+Moradas+Santa+Maria+RS",
                },
                {
                  icon: <Clock size={22} />,
                  label: "Horário",
                  value: "Seg a Sáb: 9h–18h",
                  href: "#",
                },
              ].map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`flex items-start gap-4 rounded-2xl p-5 border transition-all group ${
                    contact.highlight
                      ? "bg-[#25D366]/10 border-[#25D366]/30 hover:bg-[#25D366]/20"
                      : "bg-white/10 border-white/15 hover:bg-white/15"
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      background: contact.highlight
                        ? "#25D366"
                        : BRAND.green,
                      color: "white",
                    }}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">
                      {contact.label}
                    </p>
                    <p className="text-white font-medium text-sm leading-relaxed">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden border border-white/15 h-80 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5!2d-53.8069!3d-29.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzAzLjEiUyA1M8KwNDgnMjQuOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Costuras da Bá — Moradas, Santa Maria, RS"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-border py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <Logo variant="horizontal" size={28} />
            </div>

            <nav className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <p className="text-xs text-muted-foreground text-center sm:text-right">
              © 2026 Costuras da Bá. Todos os direitos reservados.
              <br className="sm:hidden" />{" "}
              <span className="hidden sm:inline">| </span>
              Moradas, Santa Maria, RS
            </p>
          </div>
        </div>
      </footer>

      {/* ─── WHATSAPP FLOATING BUTTON ─── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float whatsapp-pulse"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </div>
  );
}
