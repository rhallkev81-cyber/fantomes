export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F0E4] text-[#1C1A17]">
      <div className="mx-auto flex max-w-md flex-col px-6 py-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#B23A25]">
          Fantômes
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-tight">
          Débusque les abonnements que tu paies sans t&apos;en servir.
        </h1>

        <p className="mt-6 text-lg leading-relaxed">
          Trois abonnements oubliés à 8 € par mois, c&apos;est{" "}
          <span className="font-bold text-[#B23A25]">288 € par an</span>, pour
          rien. Petits prélèvements, donc invisibles sur ton relevé.
        </p>

        <ul className="mt-8 space-y-4 text-base leading-relaxed">
          <li>
            <span className="font-bold">Tout est repéré.</span> Tu déposes ton
            relevé, on retrouve les prélèvements qui reviennent.
          </li>
          <li>
            <span className="font-bold">Classé par montant annuel.</span> Les
            plus coûteux en premier.
          </li>
          <li>
            <span className="font-bold">Lettre de résiliation prête.</span> Une
            par abonnement, il ne reste qu&apos;à l&apos;envoyer.
          </li>
        </ul>

        <a
          href="#"
          className="mt-10 block rounded-full bg-[#B23A25] px-6 py-4 text-center text-lg font-bold text-white"
        >
          Commencer
        </a>
        <p className="mt-3 text-center text-sm text-[#6B655B]">
          Audit complet à 19 €, une seule fois. Pas d&apos;abonnement.
        </p>
      </div>
    </main>
  );
}