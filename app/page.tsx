const LIEN_PAIEMENT = "https://buy.stripe.com/test_3cI28q8l50Z4azN5Hn5c400";
const EMAIL_CONTACT = "rhallkev81@gmail.com";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F0E4] text-[#1C1A17]">
      <div className="mx-auto flex max-w-md flex-col px-6 py-10">
        <header className="flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#B23A25]">
            Fantômes
          </p>

          <span className="rounded-full border border-[#D8CBB8] px-3 py-1 text-xs font-medium text-[#6B655B]">
            Audit unique
          </span>
        </header>

        <section className="mt-8">
          <h1
            className="text-4xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Débusque les abonnements que tu paies sans t&apos;en servir.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#3B3630]">
            Petits prélèvements, donc invisibles sur ton relevé. Mais à la fin
            de l&apos;année, ils peuvent te coûter cher.
          </p>

          <a
            href={LIEN_PAIEMENT}
            className="mt-8 block rounded-full bg-[#B23A25] px-6 py-4 text-center text-lg font-bold text-white shadow-lg shadow-[#B23A25]/20 transition hover:bg-[#962F1E]"
          >
            Commencer l&apos;audit, 19 €
          </a>

          <p className="mt-3 text-center text-sm text-[#3B3630]">
            Paiement unique, sans abonnement.{" "}
            <span className="font-bold">Satisfait ou remboursé 14 jours.</span>
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-[#E1D4C0] bg-[#FFF9EE] p-5 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-[#B23A25]">
            Exemple concret
          </p>

          <p className="mt-3 text-lg leading-relaxed">
            Trois abonnements oubliés à 8 € par mois, c&apos;est{" "}
            <span className="font-bold text-[#B23A25]">288 € par an</span>,
            pour rien.
          </p>
        </section>

        <section className="mt-9">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Ce que Fantômes fait pour toi
          </h2>

          <div className="mt-5 rounded-3xl bg-white/70 p-5 shadow-sm">
            <ul className="space-y-5 text-base leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B23A25] text-sm font-bold text-white">
                  1
                </span>
                <p>
                  <span className="font-bold">Tout est repéré.</span> Tu
                  déposes ton relevé, Fantômes retrouve les prélèvements qui
                  reviennent.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B23A25] text-sm font-bold text-white">
                  2
                </span>
                <p>
                  <span className="font-bold">Classé par montant annuel.</span>{" "}
                  Les abonnements les plus coûteux remontent en premier.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B23A25] text-sm font-bold text-white">
                  3
                </span>
                <p>
                  <span className="font-bold">
                    Lettre de résiliation prête.
                  </span>{" "}
                  Une lettre par abonnement, il ne reste qu&apos;à l&apos;envoyer.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-9 rounded-3xl bg-[#1C1A17] p-5 text-[#F6F0E4]">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Simple et sans abonnement
          </h2>

          <p className="mt-4 leading-relaxed text-[#E8DDCC]">
            Tu paies une seule fois pour l&apos;audit complet. Pas de
            mensualité, pas d&apos;engagement.
          </p>

          <p className="mt-5 text-3xl font-bold text-white">19 €</p>

          <p className="mt-1 text-sm text-[#CFC2AE]">
            Paiement unique. Liste livrée sous 24 h.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-[#E1D4C0] bg-[#FFF9EE] p-5">
          <h2 className="font-bold">Satisfait ou remboursé, 14 jours</h2>

          <p className="mt-3 text-sm leading-relaxed text-[#3B3630]">
            Pas satisfait ? Écris-nous à{" "}
            <a className="underline" href={`mailto:${EMAIL_CONTACT}`}>
              {EMAIL_CONTACT}
            </a>{" "}
            dans les 14 jours après ton paiement. Tu es remboursé sous 5 jours,
            sans avoir à te justifier.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-[#E1D4C0] p-5">
          <h2 className="font-bold">Confidentialité</h2>

          <p className="mt-3 text-sm leading-relaxed text-[#6B655B]">
            Fantômes ne te demande jamais tes identifiants bancaires. Tu fournis
            uniquement un relevé pour analyser les prélèvements récurrents.
          </p>
        </section>

        <a
          href={LIEN_PAIEMENT}
          className="mt-10 block rounded-full bg-[#B23A25] px-6 py-4 text-center text-lg font-bold text-white shadow-lg shadow-[#B23A25]/20 transition hover:bg-[#962F1E]"
        >
          Commencer l&apos;audit, 19 €
        </a>

        <p className="mt-3 text-center text-sm text-[#6B655B]">
          Paiement unique, sans abonnement. Satisfait ou remboursé 14 jours.
        </p>
      </div>
    </main>
  );
}