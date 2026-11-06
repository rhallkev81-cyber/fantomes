import type { Metadata } from "next";

const EMAIL_RELEVES = "rhallkev81@gmail.com";

export const metadata: Metadata = {
  title: "Merci — Fantômes",
  robots: { index: false },
};

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-[#F6F0E4] text-[#1C1A17]">
      <div className="mx-auto flex max-w-md flex-col px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#B23A25]">
          Paiement confirmé
        </p>

        <h1
          className="mt-6 text-4xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Merci. Il ne reste qu’une étape.
        </h1>

        <p className="mt-6 text-lg leading-relaxed">
          Envoie-nous ton relevé bancaire, et ta liste d’abonnements oubliés
          arrive{" "}
          <span className="font-bold text-[#B23A25]">sous 24 h</span>.
        </p>

        <a
          href={`mailto:${EMAIL_RELEVES}?subject=Audit%20Fant%C3%B4mes%20-%20Mon%20relev%C3%A9`}
          className="mt-8 block rounded-full bg-[#B23A25] px-6 py-4 text-center text-lg font-bold text-white"
        >
          Envoyer mon relevé
        </a>
        <p className="mt-3 text-center text-sm text-[#6B655B]">
          Format CSV ou PDF, de préférence les 12 derniers mois.
        </p>

        <h2 className="mt-12 text-xl font-bold">Ce que tu vas recevoir</h2>
        <ul className="mt-4 space-y-3 text-base leading-relaxed">
          <li>Les prélèvements réguliers repérés sur ton relevé.</li>
          <li>Classés par coût annuel, les plus chers en premier.</li>
          <li>Une lettre de résiliation prête pour chacun.</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold">Ta confidentialité</h2>
        <p className="mt-4 text-base leading-relaxed">
          On ne te demande jamais tes identifiants bancaires. Ton relevé sert
          uniquement à ton audit, et il est supprimé une fois ton audit livré.
        </p>

        <p className="mt-10 text-sm text-[#6B655B]">
          Une question ? Écris à{" "}
          <a className="underline" href={`mailto:${EMAIL_RELEVES}`}>
            {EMAIL_RELEVES}
          </a>
          .
        </p>
      </div>
    </main>
  );
}