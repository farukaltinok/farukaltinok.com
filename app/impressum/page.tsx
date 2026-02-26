"use client";

import { useLang } from "../components/LanguageContext";

export default function ImpressumPage() {
  const { t } = useLang();

  return (
    <main className="wrap wide">
      <section className="impressum">

        <div className="impressumBlock">
          <p className="impressumTitle">{t("impressum.title1")}</p>
          <p className="impressumText">
            Faruk Altinok<br />
            c/o GATZKE.MEDIA GmbH<br />
            Am Turm 44<br />
            53721 Siegburg
          </p>
        </div>

        <div className="impressumBlock">
          <p className="impressumTitle">{t("impressum.title2")}</p>
          <p className="impressumText">
            Faruk Altinok<br />
            c/o GATZKE.MEDIA GmbH<br />
            Am Turm 44<br />
            53721 Siegburg
          </p>
        </div>

      </section>
    </main>
  );
}