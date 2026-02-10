export type Essay = {
    slug: string;
    title: string;
    description: string;
    date: string; // TT.MM.JJ
    comingSoon?: boolean;
    content?: string;
  };
  
  // ➜ Neueste Essays immer OBEN einfügen
  const essays: Essay[] = [
    {
      slug: "der-tuerkische-gastarbeiter",
      title: "Der Türkische Gastarbeiter",
      description: "",
      date: "10.02.26",
      comingSoon: true,
    },
    {
      slug: "der-geschmack-des-todes",
      title: "Der Geschmack des Todes",
      description:
        "Über den Tod meines Vaters und ein Versprechen an meine Mutter.",
      date: "04.02.26",
      comingSoon: false,
      content: `i.
  Jeder von uns wird den Tod schmecken.
  Ich kannte diesen Satz. Ich habe ihn schon oft gehört. Ich habe ihn auch verstanden, zumindest dachte ich das.
  Heute hat er eine andere Bedeutung bekommen.
  Heute ist mein Vater gestorben.
  
  ii.
  Ich schreibe das hier nicht, um Mitleid zu bekommen.
  Ich schreibe es, weil mein Kopf gerade voll ist und ich versuche, Ordnung in etwas zu bringen, das sich nicht ordnen lässt.
  
  iii.
  Mein Vater hatte drei Jahre Krebs.
  Drei Jahre, in denen ich in einem Zwischenzustand gelebt habe, den ich niemandem erklären konnte. Nicht komplett am Boden, aber auch nie frei. Eher wie ein Hintergrundrauschen, das nie aufhört. Du wachst auf und weißt: Da ist etwas. Und egal wie sehr du versuchst, normal weiterzumachen, es ist immer da.
  
  Innerhalb dieser drei Jahre war es immer wieder so: Die Ärzte sagten, er habe noch ein paar Wochen. Dann Tage. Dann plötzlich wieder Monate. Dann wieder nur Tage. Immer wieder dachte ich: Alright, das war's jetzt. Und dann doch nicht. Und dann wieder doch. Ich konnte mich nie auf irgendwas richtig einlassen. War nie voll fokussiert bei der Arbeit. Aber wenn ich bei meiner Familie war, wollte ich trotzdem arbeiten, weil ich Ziele habe, die größer sind als ich und die mir ebenfalls sehr viel bedeuten.
  
  Dieses ständige Hin und Her hat mich innerlich zerrissen. Ich wollte losziehen und die Welt sehen, Dinge aufbauen, Gas geben. Und gleichzeitig hat es sich falsch angefühlt, überhaupt wegzudenken. Als hätte ich mich entscheiden müssen zwischen Zukunft und Familie. Zwischen dem, was ich werden will, und dem, was gerade gebraucht wird.
  
  iv.
  Nach außen haben viele in der Zeit trotzdem nur das gesehen, was sie immer gesehen haben: Videos. Entertainment. Lachen. Energie.
  
  Aber während ich vor der Kamera gelacht habe, war ich im Hintergrund oft einfach irritiert. Nicht so, dass ich es in einem Satz erklären könnte. Eher wie ein permanentes Unwohlsein. Wie eine leise Stimme, die fragt: Was mache ich hier gerade?
  
  Ich hatte immer weniger Bock auf reines Entertainment. Nicht weil ich es schlecht finde, ich liebe es, Menschen zum Lächeln zu bringen. Aber irgendwann hat es sich so angefühlt, als würde ich zwei Leben gleichzeitig leben. Eins vor der Kamera. Eins dahinter.
  
  v.
  In dieser Zeit hab ich mich verliebt.
  
  Es war nicht einfach ein kurzer Crush. Ich habe in meinem Kopf schon ein ganzes Leben gebaut. Ich hab ihr sogar einen Liebesbrief geschrieben. Und rückblickend glaube ich, dieses Gefühl war auch deswegen so intensiv, weil es auf einen absoluten Tiefpunkt getroffen ist. Auf einmal war da etwas Helles. Etwas Warmes. Etwas, das sich nach Zukunft angefühlt hat, genau in einer Zeit, in der sonst alles schwer war.
  
  Als sich dann herausgestellt hat, dass sie keine Gefühle für mich hat, bin ich innerlich zusammengebrochen. Nicht wegen ihr. Sondern weil ich in dem Moment gemerkt habe, wie sehr ich mich an dieses Gefühl geklammert hatte. Es war wie ein Rettungsboot. Und als es weg war, war ich einfach nur noch... leer. Keine große Trauer. Keine Wut. Nur Stille.
  
  vi.
  Danach habe ich mich zwei Jahre auf der Stelle bewegt.
  
  Ich habe weiter gepostet. Weiter versucht, Leuten ein Lächeln ins Gesicht zu zaubern. Und irgendwo war das auch echt. Aber gleichzeitig war ich kaputt. Und das Absurde: Niemand wusste es.
  
  Ich habe meine Gefühle keiner Menschenseele geteilt. Nicht meinen Freunden. Nicht meinen Eltern. Ich wollte sie nicht belasten, sie hatten schon genug um die Ohren.
  
  Ich war lost. Ich hatte meine Ziele vor Augen, aber sie waren so weit weg, dass sie sich manchmal eher wie ein nebeliger Traum angefühlt haben. Ich wollte reisen. Ich wollte raus. Ich wollte die Welt sehen. Aber ich wollte auch bei meiner Familie sein. Und ich wusste nicht, wie beides gleichzeitig gehen soll.
  
  vii.
  Ich bin ein rationaler Mensch. Ich versuche Dinge zu verstehen, statt mich von ihnen überrollen zu lassen. Vielleicht ist das der Grund, warum ich so lange geschwiegen habe. Weil ich dachte, ich kann das alleine sortieren. Weil ich dachte, wenn ich hart genug bin, wird es schon gehen.
  
  viii.
  Doch heute ist mein Vater gestorben.
  
  Und heute merke ich: Manche Dinge lassen sich nicht wegdenken. Der Tod ist kein Konzept. Kein Thema für irgendwann. Er ist real. Und er ist heute passiert.
  
  Ich bin gläubig. Im Islam gibt es diese Vorstellung, dass ein Mensch durch Krankheit gereinigt wird. Dass Leiden nicht sinnlos ist. Dass der Tod nicht das Ende ist. Und ich glaube, das ist der Grund, warum ich gerade nicht in der Art von Verzweiflung bin, die manche erwarten würden.
  
  Das macht es nicht leicht. Aber es macht es anders.
  
  Und trotzdem trifft es dich. Natürlich trifft es dich. Es ist dein Vater. Die Person, die dein Leben geprägt hat. Du merkst, wie still alles wird. Wie endgültig ein Satz wie „er ist weg" eigentlich ist. Du merkst, dass Zeit nicht verhandelbar ist.
  
  Aber ich bin froh, dass ich geblieben bin. Dass ich da war. Dass ich die letzten Atemzüge meines Vaters miterleben durfte. Er ist gegangen, Zuhause, neben seinen Liebsten, in Ruhe und in Frieden, während der Quran gelesen wurde.
  
  Sein Tag war heute.
  
  Meiner wird auch kommen. Wann, weiß ich nicht. Niemand weiß das. Aber eins ist klar: Ich will nicht so leben, als hätte ich unendlich davon.
  
  ix.
  In den letzten drei Jahren hat meine Mutter alles getragen.

  Und wenn ich das so schreibe, klingt es fast zu klein. Sie hat sich nicht „ein bisschen" überstrapaziert. Sie hat sich um alles gekümmert. Termine, Organisation, Haushalt, Pflege, Gespräche, Stress, Sorgen. Alles. Und trotzdem war sie da. Als Mutter. Als Ehefrau. Als Mensch.

  Bei der Beerdigung meines Vaters kamen viele Menschen. Räume haben sich gefüllt an Leuten, die um ihn weinen. Und in dem Moment habe ich verstanden: Das ist, was bleibt. Nicht Geld. Nicht Follower. Sondern wie viele Leben du berührt hast.

  Deshalb gebe ich jetzt Vollgas. Ich will Dinge aufbauen, die Menschen helfen. Eine Person werden, die das Leben anderer besser macht.

  Und es fängt bei meiner Mutter an. Sie soll sich um nichts mehr sorgen müssen. In spätestens drei Jahren will ich sie retiren. Dass sie durchatmen kann. Dass sie wieder leben kann, ohne ständig überleben zu müssen.

  Heute ist vieles, was jahrelang verschwommen war, plötzlich scharf. Ich spüre wieder Klarheit.

  Vielleicht ist das der Geschmack des Todes. Nicht nur, dass er bitter ist. Sondern dass er dich weckt. Dass er dir brutal zeigt, was wichtig ist. Und dass er dir keine Ausreden lässt.

  Sein Tag war heute.

  Möge Allah ihm barmherzig sein. Und möge Er uns allen Kraft, Erfolg und Gesundheit geben.
  
  إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ`,
    },
  ];
  
  export default essays;
  
  export function getEssayBySlug(slug: string): Essay | undefined {
    return essays.find((e) => e.slug === slug);
  }