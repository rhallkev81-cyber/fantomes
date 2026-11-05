export default function MerciPage() {
  return (
    <main className="min-h-screen bg-[#F6F0E4] text-[#1C1A17]">
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-10">
        <div className="rounded-3xl border border-[#E1D4C0] bg-[#FFF9EE] p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#B23A25]">
            Paiement confirmé
          </p>

          <h1
            className="mt-5 text-4xl font-bold leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Merci pour ton paiement.
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[#3B3630]">
            Ton audit Fantômes peut maintenant commencer.
          </p>

          <div className="mt-6 rounded-2xl bg-white/70 p-5">
            <h2 className="font-bold">Prochaine étape</h2>

            <p className="mt-3 text-sm leading-relaxed text-[#6B655B]">
              Envoie ton relevé bancaire au format PDF à l’adresse suivante :
            </p>

            <a
              href="mailto:rhallkev81@gmail.com?subject=Audit Fantômes - Relevé bancaire"
              className="mt-4 block rounded-full bg-[#B23A25] px-5 py-3 text-center font-bold text-white transition hover:bg-[#962F1E]"
            >
              Envoyer mon relevé
            </a>

            <p className="mt-4 text-xs leading-relaxed text-[#6B655B]">
              Remplace ensuite l’adresse email par ton vrai email professionnel.
              Ne demande jamais les identifiants bancaires du client.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-[#E1D4C0] p-4">
            <h2 className="font-bold">Confidentialité</h2>

            <p className="mt-2 text-sm leading-relaxed text-[#6B655B]">
              Fantômes analyse uniquement les prélèvements récurrents visibles
              sur le relevé. Aucun identifiant bancaire n’est demandé.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}