import type { Lang } from "../components/LanguageContext";

export type Essay = {
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  date: string;
  comingSoon?: boolean;
  content?: Record<Lang, string>;
};

// ➜ Älteste Essays oben, neueste unten
const essays: Essay[] = [
  {
    slug: "the-taste-of-death",
    title: {
      de: "Der Geschmack des Todes",
      en: "The Taste of Death",
    },
    description: {
      de: "Über den Tod meines Vaters und ein Versprechen an Mama.",
      en: "About the death of my dad and a promise to my mom.",
    },
    date: "10.02.26",
    comingSoon: false,
    content: {
      de: `i.
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

Als sich dann herausgestellt hat, dass sie keine Gefühle für mich hat, bin ich innerlich zusammengebrochen. Nicht wegen ihr. Sondern weil ich in dem Moment gemerkt habe, wie sehr ich mich an dieses Gefühl geklammert hatte. Es war ein Rettungsboot. Und als es weg war, war ich einfach nur noch... leer. Keine große Trauer. Keine Wut. Nur Stille.


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

Aber ich bin froh, dass ich geblieben bin. Dass ich da war. Dass ich die letzten Atemzüge meines Vaters miterleben durfte. Er ist gegangen. Zuhause, neben seinen Liebsten, in Ruhe und in Frieden, während der Quran gelesen wurde.

Sein Tag war heute.

Meiner wird irgendwann auch kommen. Wann, das weiß ich nicht. Niemand weiß das. Aber eins ist klar: Ich will nicht so leben, als hätte ich unendlich davon.


ix.
In den letzten drei Jahren hat meine Mutter alles getragen.

Und wenn ich das so schreibe, klingt es fast zu klein. Sie hat sich nicht „ein bisschen" überstrapaziert. Sie hat sich um alles gekümmert. Termine, Organisation, Haushalt, Pflege, Gespräche, Stress, Sorgen. Alles. Und trotzdem war sie da. Als Mutter. Als Ehefrau. Als Mensch.

Heute ist der Tag vor der eigentlichen Beerdigung, und unsere Wohnung war bereits jetzt voller Freunde und Familie. Räume haben sich gefüllt mit Leuten, die für meinen Vater gekommen sind. Und in dem Moment habe ich verstanden: Das ist, was bleibt. Nicht Geld. Nicht Follower. Sondern wie viele Leben du berührt hast.

Deshalb gebe ich jetzt Vollgas. Nicht für Reichweite. Nicht für Applaus. Ich will einfach Dinge aufbauen, die Menschen helfen. Eine Person werden, die das Leben anderer besser macht.

Und es fängt bei meiner Mutter an. Sie soll sich um nichts mehr sorgen müssen. In spätestens drei Jahren werde ich sie InshaAllah retiren. Dass sie durchatmen kann. Dass sie wieder leben kann, ohne ständig überleben zu müssen.

Das ist kein Ziel, das gut auf einer Liste aussehen soll. Es ist ein Versprechen.

Heute ist vieles, was jahrelang verschwommen war, plötzlich scharf. Ich spüre wieder Klarheit.

Vielleicht ist das der Geschmack des Todes. Nicht nur, dass er bitter ist. Sondern dass er dich weckt. Dass er dir brutal zeigt, was wichtig ist. Und dass er dir keine Ausreden lässt.

Sein Tag war heute.

Möge Allah ihm barmherzig sein. Und möge Er uns allen Kraft, Erfolg und Gesundheit geben.

إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ`,

      en: `i.
Each of us will taste death.
I knew this sentence. I have heard it many times. I also understood it, or at least I thought I did.
Today it has taken on a different meaning.
Today my father died.

ii.
I am not writing this to get sympathy.
I am writing it because my head is full right now and I am trying to bring order to something that cannot be ordered.


iii.
My father had cancer for three years.
Three years in which I lived in a limbo that I couldn't explain to anyone. Not completely down, but never free either. More like background noise that never stops. You wake up and know: there's something there. And no matter how hard you try to carry on as normal, it's always there.

During those three years, it was always the same: the doctors said he had a few weeks left. Then days. Then suddenly months again. Then just days again. Again and again, I thought: alright, that's it now. And then it wasn't. And then it was again. I could never really commit to anything. I was never fully focused at work. But when I was with my family, I still wanted to work, because I have goals that are bigger than me and that also mean a lot to me.

This constant back and forth tore me apart inside. I wanted to go out and see the world, build things, go all in. And at the same time, it felt wrong to even think about leaving. As if I had to choose between my future and my family. Between what I want to become and what is needed right now.


iv.
Outwardly, many people still only saw what they always saw during that time: Videos. Entertainment. Laughter. Energy.

But while I was laughing in front of the camera, I was often just unsettled in the background. Not in a way I could explain in a single sentence. More like a constant uneasiness. Like a quiet voice asking: what am I actually doing here?

I was less and less interested in pure entertainment. Not because I think it's bad. I love putting a smile on people's faces. But at some point, it felt like I was living two lives at once. One in front of the camera. One behind it.


v.
During this time, I fell in love.

It wasn't just a brief crush. I had already built a whole life in my head. I even wrote her a love letter. And looking back, I think this feeling was so intense because it came at an absolute low point. Suddenly there was something bright. Something warm. Something that felt like the future, at a time when everything else was heavy.

When it turned out that she didn't have feelings for me, I collapsed inside. Not because of her. But because in that moment I realized how much I had clung to that feeling. It was a lifeboat. And when it was gone, I was just... empty. No great sadness. No anger. Just silence.


vi.
After that, I spent two years treading water.

I kept posting. Kept trying to put a smile on people's faces. And in some ways, it was genuine. But at the same time, I was broken. And the absurd thing was: no one knew.

I didn't share my feelings with a single soul. Not my friends. Not my parents. I didn't want to burden them. They already had enough on their plates.

I was lost. I had my goals in mind, but they were so far away that they sometimes felt more like a foggy dream. I wanted to travel. I wanted to get out. I wanted to see the world. But I also wanted to be with my family. And I didn't know how to do both at the same time.


vii.
I am a rational person. I try to understand things instead of letting them overwhelm me. Maybe that's why I kept quiet for so long. Because I thought I could sort it out on my own. Because I thought that if I was tough enough, it would work out.


viii.
But today my father died.

And today I realize: some things cannot be thought away. Death is not a concept. Not something to deal with someday. It is real. And it happened today.

I am a believer. In Islam, there is this idea that a person is purified through illness. That suffering is not meaningless. That death is not the end. And I believe that is why I am not in the kind of despair that some might expect.

That doesn't make it easy. But it makes it different.

And yet it still hits you. Of course it hits you. It's your father. The person who shaped your life. You notice how quiet everything becomes. How final a sentence like "he's gone" actually is. You realize that time is non-negotiable.

But I'm glad I stayed. That I was there. That I got to witness my father's last breaths. He passed away at home, surrounded by his loved ones, in peace and in calm, while the Quran was being recited.

Today was his day.

Mine will come someday too. When, I don't know. No one knows. But one thing is clear: I don't want to live as if I had an infinite amount of it.


ix.
Over the last three years, my mother has carried everything.

And when I write it like that, it almost sounds too small. She didn't just overwork herself a little. She took care of everything. Appointments, organization, household, care, conversations, stress, worries. Everything. And yet she was still there. As a mother. As a wife. As a human being.

Today is the day before the actual funeral, and our apartment was already full of friends and family. Rooms filled with people who had come for my father. And in that moment, I understood: that is what remains. Not money. Not followers. But how many lives you've touched.

That's why I'm going all in now. Not for reach. Not for applause. I simply want to build things that help people. Become a person who makes the lives of others better.

And it starts with my mother. She shouldn't have to worry about anything anymore. Within three years, InshaAllah, I will retire her. So she can breathe. So she can live again, without constantly having to survive.

This is not a goal meant to look good on a list. It's a promise.

Today, many things that had been blurry for years are suddenly sharp. I feel clarity again.

Maybe that's the taste of death. Not just that it's bitter. But that it wakes you up. That it brutally shows you what matters. And that it leaves you no excuses.

Today was his day.

May Allah have mercy on him. And may He grant us all strength, success, and health.

إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ`,
    },
  },
  {
    slug: "the-5000-year-equation",
    title: {
      de: "Die 5000 Jahre Formel",
      en: "The 5,000 Year Equation",
    },
    description: {
      de: "Über die Art, wie ich denke und die Zukunft plane.",
      en: "About the way I think and plan the future.",
    },
    date: "17.02.26",
    comingSoon: false,
    content: {
      de: `i.
Wenn mich als Kind etwas fasziniert hat, wollte ich sofort meine eigene Version davon bauen. Das war der Standardmodus. Mit 11 habe ich versucht, einen Magnetmotor zu bauen. Ein Gerät, das allein aus Magneten unendlich Energie erzeugt. Hat nicht funktioniert. Kann nicht funktionieren. Verstößt gegen die Gesetze der Thermodynamik. Also weiter. Ich habe Super Mario gespielt und wollte mein eigenes Spiel machen, also habe ich ein Jump-and-Run programmiert. Ich habe mein erstes Handy bekommen und angefangen, kaputte Handys zu reparieren und auf eBay weiterzuverkaufen, als Taschengeld.

Ich erzähle das nicht, um irgendjemanden zu beeindrucken. Ich erzähle es, weil sich darin ein Muster zeigt, das fast alle meine Entscheidungen seitdem erklärt. Wenn mich etwas interessiert, ist mein erster Impuls nicht Bewunderung. Es ist der Drang, die Sache auseinanderzunehmen und selbst nachzubauen.


ii.
Mit 13 habe ich den Film Limitless gesehen. Ein Mann nimmt eine Pille, die sein volles kognitives Potenzial freischaltet. Fiktion, klar. Aber danach war ich besessen von Neurochemie. Ich wollte ein Biotech-Unternehmen gründen. Also habe ich eine Wissenschaftlerin bei Bayer angeschrieben und gefragt, was man braucht, um ein Labor aufzubauen. Ihre Antwort: Millionen von Euro.

Mein Vermögen zu dem Zeitpunkt: 8,73€.

Also habe ich gerechnet. Ein Biochemiker in Deutschland verdient ungefähr 55.000€ brutto im Jahr. Wenn ich 30% des Nettoeinkommens spare, sind das etwa 10.000€ pro Jahr. Um 50 Millionen Euro zusammenzubekommen, bräuchte ich rund 5.000 Jahre.

Damit war der Standardweg gestorben. Die Rechnung geht einfach nicht auf. Gleicher Reflex wie beim Magnetmotor. Physik sagt nein, weiter. Mathe sagt 5.000 Jahre, finde einen anderen Weg.

Ich glaube, das ist eine der nützlichsten Lektionen, die ich früh gelernt habe: Manche Wege sind kaputt, egal wie hart man arbeitet. Die Disziplin, das zu erkennen und den Weg zu wechseln, statt aus Stolz weiterzudrücken, ist wichtiger als die meisten denken.


iii.
Ich habe angefangen, Biografien zu lesen. Jobs, Musk und viele andere. Schnell hat sich ein Muster gezeigt: Fast alle hatten eigene Unternehmen gegründet. Aber Biotech braucht massives Kapital, jahrelanges Studium, Labore, Genehmigungen. Als Teenager ohne Geld war das kein realistischer erster Schritt.

Die Frage wurde also: Was erzeugt den größten Output mit den wenigsten Ressourcen?

Ich war gut in der Schule, also habe ich angefangen, Nachhilfe zu geben. 8€ pro Stunde. Fast sofort kam der Gedanke: Was, wenn ich nicht selbst unterrichte, sondern Schüler mit Tutoren connecte und eine Provision nehme? Dann tausche ich nicht mehr meine eigene Zeit gegen Geld. Dann ist es ein System, das ohne mich laufen kann.

Mit einem Freund aus meinem Informatikkurs habe ich angefangen, eine Plattform zu bauen. Ein Marktplatz für Nachhilfe mit integriertem Videokonferenz-Tool. Software hat Sinn ergeben, weil sie günstig ist, wenn man sie selbst baut, kaum Startkapital braucht und skaliert, ohne dass man mehr Zeit investieren muss.

Er hat sich auf die Entwicklung konzentriert, ich auf die Distribution. Das einzige Problem war klar: kein Budget. Egal welche Marketingstrategie, sie musste kostenlos und skalierbar sein.


iv.
Dann bin ich auf TikTok gestoßen. Es war 2019, vor der Pandemie. Runtergeladen, zu viel Zeit mit Videos verschwendet, wieder gelöscht. Zurück zum Coden, zur Schule, zu anderen Wegen, die Plattform zu vermarkten.

Dann kam Covid. Und plötzlich hatte ich Zeit.

Ich habe TikTok nochmal runtergeladen. Diesmal nicht zum Konsumieren, sondern zum Produzieren. Die Logik war simpel: Menschen folgen keinen Marken, sie folgen Menschen. Also baue ich eine persönliche Reichweite in unserer Zielgruppe auf und nutze sie, um die Plattform zu vermarkten.

Ich habe angefangen, Comedy Content mit Schulbezug zu posten. Innerhalb von Monaten hatte ich 100.000 Follower. Genau die Zielgruppe, die unser Startup brauchte. Aber das Timing hat nicht gepasst. Die Schule wurde zu intensiv, und wir haben das Projekt pausiert, um unser Abitur durchzuziehen.

Auf TikTok habe ich trotzdem weitergemacht. Denn aufzuhören hätte bedeutet, das Momentum zu verlieren und die Reichweite zu verschwenden, die ich mir aufgebaut hatte. Noch bevor ich meinen Abschluss hatte, kamen die ersten Brand Deals rein. Nach dem dritten hatte ich die Preismodelle verstanden. Und mir wurde klar: Tausende Euro für ein 30-Sekunden-Video mit quasi null Produktionskosten, das ist ein extrem effizientes Geschäftsmodell.

Mit einem Einser Abitur in der Tasche rückte das Nachhilfe Projekt in den Hintergrund. Neues Ziel: eine Million Follower vor dem Studium. Also habe ich die Einschreibung verschoben. Dann nochmal. Die Million Follower kam, dann zwei Millionen. Über 500 Millionen Aufrufe auf allen Plattformen. Alles organisch. Keine Ads, keine Agentur. Alles selbst beigebracht und selbst produziert.


v.
Dann wurde bei meinem Vater Krebs diagnostiziert.

Ich bin in ein Loch gefallen. Drei Jahre lang hat sich die Prognose ständig verschoben. Noch Wochen. Dann Monate. Dann plötzlich Tage. Dann wieder Monate. Irgendetwas zu planen war unmöglich, weil jeder Tag der letzte sein konnte.

Ich wollte so viel Zeit wie möglich mit ihm verbringen.

Mein Vater ist am 10. Februar 2026 gestorben.

Was diese Erfahrung verändert hat, ist meine Definition von „schwer". Ein Business aufzubauen ist stressig. Menschen erleben Burn Outs, geben auf, zerbrechen am Druck. Verstehe ich. Aber wenn man seinen Vater drei Jahre lang gegen Krebs kämpfen und verlieren sieht, wenn man Nächte verbringt, ohne zu wissen, ob er morgens noch da ist, dann trifft der Stress eines gescheiterten Launches oder eines schlechten Monats einfach anders. Nicht weil ich abgehärtet bin. Sondern weil ich einen Referenzpunkt für echten Schmerz habe. Und die meisten Business-Probleme kommen da nicht ran.


vi.
Brand Deals haben mir viel beigebracht. Aber sie sind unberechenbar. Ich kann nicht um sie herum planen, ich kann sie nicht skalieren, und sie hängen komplett davon ab, dass mein Gesicht vor einer Kamera ist. Ich will kein Business, das nur funktioniert, solange ich persönlich produziere. Ich will Systeme, die mit einem Team laufen und Umsatz generieren, egal ob ich an dem Tag vor der Kamera stehe oder nicht.

Also hier ist der Plan.

Schritt 1: Road to 100k€ im Monat. Cashflow. Systeme aufbauen, die konsistenten, planbaren Umsatz bringen. Ich habe über 2 Millionen Follower aufgebaut und über 500 Millionen Aufrufe generiert. Die Skills sind da. Content, Personal Branding, Community-Aufbau. Die Aufgabe jetzt ist, das alles in ein Business zu übersetzen, das nicht von mir als Produkt abhängt.

Parallel dazu: Netzwerk erweitern, reisen, von verschiedenen Kulturen lernen. Und meine Partnerin finden. Nicht nur im Business. Ich will jemanden, mit dem ich ein Leben aufbauen kann. Eine Familie gründen kann. Imperien bauen kann. Ich habe die Liebe gesehen, die meine Eltern füreinander hatten, und genau das will ich auch. Diese Art von Liebe findest du nicht fertig. Sie wird geformt durch Jahre des Zusammenlebens, des Seite-an-Seite-Kämpfens, des gemeinsamen Wachsens. Ich finde diese Person lieber jetzt und baue von Grund auf, als jemanden zu treffen, wenn alles schon steht.

Schritt 2: Skalierbare Produkte und Exits. Mit Kapitalreserven und ohne Abhängigkeiten baue ich Produkte in großen Märkten, die am ersten Tag nicht profitabel sein müssen, aber aggressiv skalieren können. Sobald Product-Market-Fit bewiesen ist, beschleunigt Venture Capital das Wachstum. Ziel: mindestens ein Exit im neunstelligen Bereich.

Schritt 3: 3D-Druck. Nachdem ich mit 16 Al Gores „The Future" gelesen habe, war ich überzeugt, dass 3D-Druck eine der disruptivsten Technologien unserer Zeit sein wird. Stell dir vor, du bestellst ein Produkt, aber statt zwei Tage auf die Lieferung zu warten, lädst du die Datei in zwei Sekunden runter und druckst es zu Hause. Logistik, wie wir sie kennen, würde sich fundamental verändern. Keine Massenproduktion mehr, nur noch Print on Demand. Keine Versandkosten, weil Drucker in jedem Land stehen, jeder Stadt, irgendwann jedem Haushalt. Kosten sinken. Risiko sinkt. Die gesamte Wertschöpfungskette wird neu geschrieben. Bei diesem Schritt geht es nicht um Cashflow oder Exits. Es geht darum, etwas zu bauen, das bleibt.


vii.
Alles oben ist weltlich. Und so ambitioniert diese Ziele auch sind, ich verliere deswegen keinen Schlaf. Nicht aus Gleichgültigkeit. Aus Vertrauen.

Ich bin praktizierender Muslim. Ich bete fünfmal am Tag. Mein Glaube gibt mir etwas, das wie ein Widerspruch zu Ambition klingen könnte, es aber nicht ist: Frieden. Ich gebe jeden Tag alles, was ich habe. Und gleichzeitig akzeptiere ich, dass das Ergebnis nicht in meiner Hand liegt. Wenn etwas für mich bestimmt ist, werde ich es erreichen. Wenn nicht, gibt es einen Grund, den ich vielleicht noch nicht sehen kann.

Das ist kein Widerspruch. Das ist das Fundament. Weil es die Angst vor dem Scheitern nimmt. Und jemand ohne diese Angst kann Risiken eingehen, die andere nicht eingehen.

Meine Intention hinter allem, was ich tue, geht über Geld hinaus. Ich will etwas hinterlassen für meine Familie, für meine Community und für jeden, der das hier in 30 Jahren liest und sich fragt, was für eine Denkweise es gebraucht hat, um von 8,73€ dorthin zu kommen, wo ich dann stehen werde.


viii.
Wenn du das hier in der Zukunft liest, weißt du, wie es ausgegangen ist. Du weißt, welche dieser Pläne aufgegangen sind und welche nicht. Du weißt, ob der 23-Jährige, der das geschrieben hat, naiv war oder klarsichtig.

Aber egal wie es ausgegangen ist: Schau auf das Denken, nicht auf die Ergebnisse. Die Frage war nie, ob jeder Plan aufgeht. Die Frage war immer, ob ich die Klarheit hatte, den richtigen Weg zu wählen, und die Bereitschaft, den Kurs zu ändern, wenn die Rechnung nicht mehr aufging.

Mein Vater hat mir beigebracht, dass niemand dir deine Freude nehmen kann. Das gilt auch für dich. Fang an. Rechne. Und wenn die Formel nicht aufgeht, finde einen anderen Weg.

Es gibt immer einen anderen Weg.

Heutiges Datum: 17.02.2026`,

      en: `i.

As a kid, whenever something fascinated me, I wanted to build my own version of it. That was the default. At 11, I tried building a magnetic motor. A device that would generate infinite energy from magnets alone. It didn't work. It can't work. It violates the laws of thermodynamics. So I moved on. I played Super Mario and wanted to make my own game, so I programmed a jump-and-run. I got my first phone, and began to repair broken phones to resell them on eBay for pocket money.

I don't mention these things to impress anyone. I mention them because they show a pattern that explains most of my decisions since. When something interests me, my first instinct isn't to admire it. It's to take it apart and figure out how to build it myself.


ii.
At 13, I watched the movie Limitless. A man takes a pill that unlocks his full cognitive potential. Fiction, obviously. But it made me obsessed with neurochemistry. I wanted to start a biotech company. So I contacted a scientist at Bayer and asked what it takes to set up a lab. Her answer: millions of euros.

My net worth at the time was 8.73€.

So I did what made sense to me. I calculated. A biochemist in Germany earns roughly 55,000€ gross per year. If I saved 30% of the net income, that's about 10,000€ per year. To accumulate 50 million euros, I would need approximately 5,000 years.

That was the end of the standard path. The math just didn't work out. I had the same reflex with the magnetic motor. Physics says no, move on. Math says 5,000 years, find another way.

I think this is one of the more useful things I learned early: some paths are broken no matter how hard you work. The discipline to recognize that and switch, instead of pushing through out of pride, matters more than most people think.


iii.
I started reading biographies. Jobs, Musk, and many others. A pattern emerged quickly: nearly all of them had started their own companies. But biotech requires massive capital, years of education, labs, permits. As a teenager with no money, that wasn't a viable first step.

So the question became: what creates the most output with the least resources?

I was doing well in school, so I started tutoring. 8€ per hour. Almost immediately, I thought: what if instead of teaching myself, I connect students with tutors and take a commission? That way it's no longer my time against money. It's a system that can run without me.

I started building a platform with a friend from my computer science class. A marketplace for tutoring combined with an integrated video conferencing tool. Software made sense because it's cheap to build if you do it yourself, requires almost no starting capital, and scales without needing more of your time.

He focused on development. I focused on distribution. The constraint was clear: we had no budget. Whatever marketing strategy we used had to be free and scalable.


iv.
That's when I came across TikTok. It was 2019, before the pandemic. I downloaded it, wasted too much time watching videos, deleted it, and went back to coding, school and finding other ways to market the platform.

Then Covid hit. And suddenly, I had time.

I downloaded TikTok again. This time not to consume, but to produce. The logic was simple: people don't follow brands, they follow people. So I'd build a personal audience in our target demographic and use it to market the platform.

I started posting school-related comedy content. Within months, I had 100,000 followers. Exactly the audience our startup needed. But the timing didn't work out. School got too demanding, and we paused the project to finish our Abitur.

I kept going on TikTok though. Stopping would have meant losing the momentum and wasting the audience I'd built. Before I even graduated, brand deals started coming in. After the third one, I understood the pricing models. And I realized: earning thousands of euros for a 30-second video with near-zero production costs is a very efficient business model.

With a top-grade Abitur done, the tutoring project faded into the background. I set a new target: one million followers before starting university. So I postponed enrollment. Then postponed again. The million followers came, then two million. Over 500 million views across platforms. All organic. No ads, no agency. Everything self-taught and self-produced.


v.
Then my father was diagnosed with cancer.

I fell into a hole. For three years, the prognosis kept shifting. Weeks left. Then months. Then suddenly days. Then months again. It was impossible to plan anything because every day could be the last one.

I wanted to spend as much time with him as possible.

My father passed away on February 10, 2026.

What that whole experience did was change what I consider hard. Building a business is stressful. People burn out, people quit, people break under the pressure. I get that. But after watching your father fight cancer for three years and lose, after spending nights not knowing if he'll still be there in the morning, the stress of a failed launch or a bad month just doesn't hit the same way. It's not that I'm tough. It's that I have a reference point for real pain, and most business problems don't come close.


vi.
Brand deals taught me a lot. But they're inconsistent. I can't plan around them, I can't scale them, and they depend entirely on my face being in front of a camera. I don't want a business that only works while I'm personally producing. I want systems that run with a team, that generate revenue whether I'm in front of a camera that day or not.

So here's the plan.

Step 1: Road to 100k€ per month. Cash flow. Building systems that generate consistent, predictable revenue. I've built over 2 million followers and generated over 500 million views across platforms. The skills are there. Content, personal branding, audience building. The task now is translating all of that into a business that doesn't depend on me being the product.

In parallel: expanding my network, traveling, learning from different cultures. And finding my partner. Not just in business. I want someone to build a life with. Someone to start a family with. Someone to build empires with. I saw the love my parents had for each other, and I want that. That kind of love isn't something you find ready-made. It's shaped by years of living together, fighting together side by side, growing together. I'd rather find that person now and build from the ground up than meet someone after everything is already done.

Step 2: Scalable products and exits. With capital reserves and no dependencies, I build products in large markets that don't need to be profitable on day one but can scale aggressively. Once product-market fit is proven, venture capital accelerates growth. Target: at least one exit in the nine-figure range.

Step 3: 3D printing. After reading Al Gore's "The Future" at 16, I became convinced that 3D printing will be one of the most disruptive technologies of our time. Imagine ordering a product but instead of waiting two days for delivery, you download the file in two seconds and print it at home. Logistics as we know it would fundamentally change. No more mass production, just print on demand. No shipping costs because printers stand in every country, every city, eventually every household. Costs drop. Risk drops. The entire value chain gets rewritten. This step isn't about cash flow or exits. It's about building something that lasts.


vii.
Everything above is worldly. And as ambitious as these goals are, I don't lose sleep over them. Not out of indifference. Out of trust.

I'm a practicing Muslim. I pray five times a day. My faith gives me something that might seem contradictory to ambition but isn't: peace. I give everything I have, every day. And at the same time, I accept that the outcome isn't mine to control. If something is meant for me, I'll reach it. If not, there's a reason I might not see yet.

That's not a contradiction. It's the foundation. Because it removes the fear of failure. And someone without that fear can take risks that others won't.

My intention behind everything I do goes beyond money. I want to leave something behind for my family, for my community, and for anyone reading this in 30 years wondering what kind of thinking it took to get from 8.73€ to wherever I'll be standing then.


viii.
If you're reading this in the future, you know how it turned out. You know which of these plans worked and which didn't. You know whether the 23-year-old who wrote this was naive or clear-eyed.

But regardless of the outcome: look at the thinking, not the results. The question was never whether every plan succeeds. The question was always whether I had the clarity to pick the right path and the willingness to change course when the math stopped working.

My father taught me that no one can take away your joy. That applies to you too. Start. Calculate. And if the equation doesn't work, find another way.

There's always another way.

Today's date: 17.02.2026`,
    },
  },
  {
    slug: "the-love-letter-in-berlin",
    title: {
      de: "Der Liebesbrief in Berlin",
      en: "The Love Letter in Berlin",
    },
    description: {
      de: "Über Liebe und die Person, die ich nicht aus meinem Kopf bekam.",
      en: "About love and the girl I could not stop thinking about.",
    },
    date: "18.02.26",
    comingSoon: false,
    content: {
      de: `i.

Es gibt ein Wort, das die meisten nie lernen, weil das Gefühl dahinter eines ist, das kaum jemand hinterfragt. Das Wort ist Limerence. Dieser obsessive, unwillkürliche Zustand, sich nach einem Menschen zu sehnen. Es tarnt sich als Liebe. Sieht aus wie Liebe, klingt wie Liebe, brennt wie Liebe. Aber es ist keine Liebe. Es ist der Hunger danach. Und ich weiß das, weil ich davon verschlungen wurde.

Zuerst muss ich euch etwas über mich erzählen: Den größten Teil meines Lebens war ich überzeugt, dass ich kein Mensch bin, der tief empfindet. Ich habe mich durch die Welt bewegt wie ein Stratege. Schule war ein System, das man entschlüsseln muss. Ich hab rausgefunden, wie man Bestnoten holt mit chirurgischer Präzision. Social Media war ein Algorithmus, den man meistern muss. Mit neunzehn hatte ich eine Reichweite von Millionen. Alles in meinem Leben hatte eine Formel. Input, Prozess, Output. Darin war ich gut. Darin war ich zuhause. Emotionen waren Hintergrundrauschen.

Dann wurde bei meinem Vater Krebs diagnostiziert.

Und Mauern, von denen ich nicht mal wusste, dass sie existieren, sind in sich zusammengefallen.


ii.

Trauer macht seltsame Dinge mit einem. Sie macht dich nicht nur traurig. Sie reißt dich auf. Sie löst irgendwas in deiner Brust, von dem du nicht wusstest, dass es versiegelt war, und auf einmal spürst du alles. Nicht nur den Schmerz, mit dem du gerechnet hast, sondern Sachen, die du dir nie erlaubt hast zu fühlen. Zärtlichkeit. Verletzlichkeit. Sehnsucht. Über Nacht bin ich von jemandem, der Emotionen kaum registriert hat, zu jemandem geworden, der darin ertrinkt. Ich bin gleichzeitig auseinandergefallen und aufgebrochen.

In genau dieser Phase, in dieser Zeit des kompletten Aufgelöstseins, habe ich jemanden kennengelernt.

Ihren Namen werde ich nicht nennen. Ich werde sie nicht so beschreiben, dass man sie erkennen könnte. Aber eines sage ich: Nicht einmal die besten Kameras dieser Welt könnten ihre Schönheit so sehen, wie es meine Augen tun. Irgendwas an ihr hat jede Strategie zum Schweigen gebracht. Ich konnte nicht für sie planen. Ich konnte mich nicht in ihre Aufmerksamkeit reinoptimieren. Ich konnte nicht reverse-engineeren, was ich gefühlt habe. Zum ersten Mal in meinem Leben stand ich vor etwas, das ich nicht kontrollieren konnte.


iii.

Ich hab ihr einen Brief geschrieben. Einen echten, handgeschriebenen Brief. Meine Hände haben gezittert. In einer Zeit, in der Menschen Gefühle über Textnachrichten gestehen, die man löschen kann, über DMs, die man zurückziehen kann, habe ich Tinte auf Papier gewählt. Permanent, unumkehrbar, beängstigend. Ich hab ihn ihr in Berlin gegeben, und in dem Moment habe ich mich more exposed gefühlt als jemals vor einer Kamera, einem Publikum oder einer Menge.

Sie war nett. Sie hat mir Tage später, respekt- und liebevoll gesagt, dass sie nicht nach einer Beziehung sucht. Dass ihr Fokus auf ihrer Vision liegt, ihrem Business, ihrem Leben. Und wisst ihr was? Genau das hab ich an ihr geliebt. Und tue es immer noch. Eine Frau, die weiß, was sie will, und die Disziplin hat, es durchzuziehen. Das ist keine Ablehnung. Das ist Fokus. Und ich respektiere das mehr, als sie jemals ahnen wird.

Aber zwischen dem Moment, in dem ich ihr den Brief in die Hand gedrückt habe, und dem Moment, in dem sie geantwortet hat, war Stille. Und in dieser Stille hat mein Kopf das gemacht, was Köpfe eben machen. Er ist durchgedreht. Ich hab mir eingeredet, dass ich ihr Angst gemacht habe. Dass der Blick in ihrem Gesicht nicht Überraschung war, sondern Ekel. Dass ich zu viel bin, zu seltsam, zu kaputt, um geliebt zu werden. Das hab ich lange mit mir rumgetragen. Es saß in meiner Brust wie ein Stein.

Ich erzähle das nicht für Mitleid, sondern weil ich ehrlich sein will. Denn wenn ich über Liebe schreibe, muss ich mit dem anfangen, was ich zuvor falsch verstanden habe.


iv.

Was ich gespürt habe, war keine Liebe. Es war Limerence.

Limerence ist, was passiert, wenn sich dein Kopf auf jemanden fixiert und aus einem einzigen Gespräch eine Kathedrale baut. Ein Fiebertraum von Connection. Intensiv, schön und im Kern unvollständig. Es lebt davon, dass du jemanden nicht wirklich kennst. Es überlebt durch Unsicherheit, durch das Fragezeichen, durch den Raum zwischen „vielleicht" und „nie". Je weniger du weißt, desto mehr füllt dein Kopf die Lücken, und was dabei entsteht, ist berauschend. Aber es ist Architektur ohne Fundament.

Echte Liebe ist nichts davon.

Ich weiß, wie echte Liebe aussieht, weil ich sie mein ganzes Leben lang gesehen habe. Meine Mutter und mein Vater. Die hatten kein Feuerwerk. Die hatten was viel Größeres. Jahrzehnte. Zwei Menschen, die mehr getragen haben als sie hätten tragen müssen, und sich trotzdem jeden Morgen wieder füreinander entschieden haben. Nächte voller Geldsorgen und Morgen, an denen sie zusammen eine Lösung gesucht haben. Mein Vater, Fabrikarbeiter, der sich nie beschwert hat über ein Leben, das schwerer war als irgendjemand ahnte. Und meine Mutter, die als Putzfrau gearbeitet hat, dann mit vierzig beschlossen hat, nochmal zur Uni zu gehen, zu studieren und als erste Person ihrer Familie einen Uni-Abschluss zu machen. Und mein Vater, der ihr nie das Gefühl gegeben hat, sie sei zu viel, weil sie mehr wollte.

Ohne meine Mutter wäre mein Vater nicht halb der Mann gewesen, der er war. Und ich glaube, er würde dasselbe sagen. Das ist Liebe. Nicht das Zittern, nicht die Obsession, nicht die Briefe mit zittrigen Händen. Liebe ist das, was übrig bleibt, wenn Limerence ausgebrannt ist. Sie entsteht in Jahren des Seite-an-Seite-Kämpfens. In geteilten Missionen und geteilter Stille. In der Art, wie jemand deine Hand hält, nicht weil das Herz rast, sondern weil es ruhig ist.


v.

Mein Großvater, und ich lache während ich das schreibe, ist mal auf ein Minarett in der Türkei geklettert und hat gedroht runterzuspringen, wenn er nicht mit meiner Oma zusammensein darf. Ich komme aus einer Linie von Männern, die ohne Grenzen lieben. Dramatisch. Fast schon absurd. Daran ist was Schönes. Aber da ist auch was, das ich anders machen will.

Ich will nicht nur die richtige Frau finden. Ich will der richtige Mann sein.

Das ist der Teil, den die meisten überspringen. Alle reden darüber, was sie in einem Partner suchen. Loyalität, Ambition, Schönheit, Glaube. Kaum jemand redet darüber, was er in sich selbst aufbaut, um das zu verdienen. Ich will die Art Ehemann sein, dessen Frau ihn anschaut und denkt: Er macht mich mutiger. Die Art Vater, dessen Kinder aufwachsen und wissen, wie ein guter Mann sich verhält. Nicht weil er es ihnen gesagt hat, sondern weil er es ihnen vorgelebt hat. Die Art Partner, der die Träume seiner Frau mit derselben Intensität unterstützt, mit der er seine eigenen verfolgt. Nicht hinter ihr. Nicht vor ihr. Neben ihr.


vi.

Ich will eine Frau mit eigener Agenda. Eigenem Feuer. Eigener Vision, die sie mit ihren eigenen Händen aufbaut. Ich will nicht jemandes ganze Welt sein. Das ist zu viel Druck für einen einzelnen Menschen. Ich will Teil eines gemeinsamen Universums sein. Zwei Menschen mit eigenen Umlaufbahnen, die sich dafür entscheiden, um dieselbe Sonne zu kreisen.

Nationalität ist mir egal. Herkunft ist mir egal. Was zählt, ist Charakter. Werte. Ob wir auf derselben Wellenlänge sind. Ob sie tagsüber ein Imperium aufbauen kann und abends einfach in den Bergen leben will. Ob sie tagsüber etwas Großes aufbauen kann und abends nichts lieber will als Ziegen und Tee und Frieden. Ich will jemanden, der beide Welten in sich trägt, weil ich beide in mir trage.

Und ich will, dass wir zusammen etwas aufbauen, das über dieses Leben hinausgeht. Ich will nicht nur eine Partnerin für die Dunya. Ich will eine Partnerin für die Akhira. Jemanden, neben dem ich stehe. Nicht nur in dieser Welt, sondern auch in der nächsten.

Ich habe vor kurzem etwas gelesen, das hängen geblieben ist. Jemand fragte: Was ist wichtiger, der Weg oder das Ziel? Die Antwort war: die Begleitung. Dem kann ich nur zustimmen.


vii.

Ich glaube, Liebe ist für jemanden wie mich deshalb so schwer, weil sie das eine verlangt, was ich mein ganzes Leben lang vermieden habe. Kontrollverlust.

Ich war immer der, der Sachen rausfindet. Der das Muster sieht, das System baut, das Problem löst, bevor es eins wird. Kontrolle ist für mich nicht bloß Gewohnheit. So habe ich überlebt. So habe ich aus eine 3,0 Durchnschnitt eine 1,0 gemacht. So habe ich 2 Millionen Follower aufgebaut, aus dem Nichts.

Aber Liebe respektiert keine Kontrolle. Es ist ihr egal, wie vorbereitet du bist. Sie kommt rein ohne zu fragen und stellt alles in deinem Kopf um. Und das Härteste ist nicht das Gefühl selbst. Es ist zu akzeptieren, dass man es nicht verdienen kann. Nicht erzwingen. Nicht reparieren. Man kann nur dastehen, offen sein und hoffen, dass das, was für einen bestimmt ist, einen auch erkennt.

Und es gibt keine Strategie auf dieser Welt dafür, jemanden loszulassen, dessen Hand man nie halten durfte.


viii.

Ich weiß nicht, ob die Frau, der ich damals den Brief geschrieben habe, das hier jemals lesen wird. Ein Teil von mir hofft es. Ein anderer hofft es nicht, weil ich nicht möchte, dass sie sich belastet fühlt von Gefühlen, um die sie nicht gebeten hat. Ich hab Abstand gehalten. Nicht weil die Gefühle weg sind, sondern weil ich sie genug respektiere, um sie ihr Leben leben zu lassen. Ungestört von meinem.

Ich habe akzeptiert, dass wir vielleicht nie zusammen sein werden. Und das meine ich ernst. Nicht als Show von Reife, sondern als ein Ort der Ruhe, den mein Herz tatsächlich gefunden hat. Ich weiß nicht, ob das, was ich durchgemacht habe, eine Prüfung der Akzeptanz war oder eine Prüfung der Geduld. Im Islam nennen wir das Sabr. Diese schmerzhafte, wunderschöne Disziplin, Allahs Timing zu vertrauen, selbst wenn das eigene Herz nach einer Antwort schreit. Vielleicht hat Er mir diese Sehnsucht gegeben, um mir zu zeigen, dass nur Seine Liebe dauerhaft ist. Vielleicht hat Er mein Herz von ihrem getrennt, um etwas zu beschützen, das ich noch nicht sehen kann. Vielleicht dauert das Warten länger als gedacht. Oder vielleicht war das Ziel nie sie.

Egal wie. Ich bin im Reinen damit. Mein Herz ist ruhig. Was für mich bestimmt ist, wird mich nie verfehlen. Und was mich verfehlt, war nie für mich bestimmt.

Und falls Er uns doch eines Tages zusammenführt, auf eine Weise, die uns beide ehrt, zu einem Zeitpunkt, der für uns beide stimmt, dann wäre ich nicht einfach glücklich. Ich wäre der dankbarste Mann auf dieser Erde. Und würde den Rest meines Lebens damit verbringen zu beweisen, dass sich die Geduld gelohnt hat.


ix.

Ich will euch von einem Moment erzählen, der alles verändert hat.

Als mein Vater gestorben ist, habe ich seinen Körper gewaschen. Im Islam waschen wir unsere Toten vor der Beerdigung. Ich wollte es selbst machen. Ich stand da, nasse Hände, und schaute auf den Körper des Mannes, der mich großgezogen hat. Der sein ganzes Leben in einer Fabrik gearbeitet hat, damit ich größer träumen kann. Und in diesem Moment hat mich etwas getroffen wie ein Blitzschlag.

Jede einzelne Sache in diesem Leben ist es wert, gefühlt zu werden.

Jeder Herzschmerz. Jede Ablehnung. Jeder Brief mit zittrigen Händen, auf den nie eine Antwort kam. Jedes stille Gebet um drei Uhr nachts. Jeder Moment der Sehnsucht nach jemandem, der sich vielleicht nie nach dir zurücksehnt. Alles. Jede Emotion, jeder Schicksalsschlag, jeder Triumph und jeder Verlust. All das ist Beweis dafür, dass du lebst. Dass dein Herz funktioniert. Dass du in der Lage bist, etwas so tief zu empfinden, dass es dich verändert.

Früher dachte ich, unerwiderte Liebe sei Zeitverschwendung. Heute sehe ich das anders. Die Liebe, die ich in mir trage, ob sie jemals erwidert wird oder nicht, hat mich weicher gemacht. Freundlicher. Menschlicher. Sie hat was in mir aufgebrochen, an das Strategien und Systeme nie rangekommen wären. Dafür bin ich dankbar.

Ich weiß nicht, wer meine Frau sein wird. Ich habe jemanden im Herzen, aber Allah weiß es am besten. Was ich weiß: Ich warte nicht darauf, dass irgendwer mich vervollständigt. Ich werde vollständig, allein. Alles, was ich gerade in mir aufbaue, jede Lektion, jedes Gebet, jeder stille Schritt nach vorne, davon wird meine zukünftige Frau eines Tages profitieren. Nicht weil ich es für sie getan habe. Sondern weil ich es für den Mann getan habe, der ich sein will, wenn sie kommt.

Bei Liebe geht es nicht darum, jemanden zu finden. Es geht darum, jemanden aufzubauen. Dich selbst.`,

      en: `i.
There is a word most people never learn, because the feeling it describes is one most people never question. The word is limerence. The obsessive, involuntary state of longing for another person. It disguises itself as love. It wears love's clothes, speaks in love's voice, and burns with what feels like love's fire. But it is not love. It is the hunger for love. And I know this, because I have been consumed by it.

I need to tell you something about myself first: For most of my life, I believed I was someone who didn't feel things deeply. I moved through the world like a strategist. School was a system to decode. I figured out how to earn the highest marks with surgical precision. Social media was an algorithm to master. I built an audience of millions by the time I was nineteen. Everything in my life had a formula. Input, process, output. I was good at this. I was comfortable in it. Emotions were background noise.

Then my father was diagnosed with cancer.

And the walls I didn't know I had collapsed.


ii.
Grief does strange things to a person. It doesn't just make you sad. It opens you. It tears something loose inside your chest that you didn't know was sealed shut, and suddenly you feel everything. Not just the pain you expected, but things you never gave yourself permission to feel. Tenderness. Vulnerability. Longing. I went from someone who barely registered emotion to someone drowning in it overnight. I was falling apart and falling open at the same time.

It was during this period, this season of being completely unraveled, that I met someone.

I won't say her name. I won't describe her in ways that make her recognizable. But I will say this: Not even the best cameras in the world could capture her beauty the way my eyes did. There was something about her presence that silenced every strategy I had ever known. I couldn't plan for her. I couldn't optimize my way into her attention. I couldn't reverse-engineer what I felt. For the first time in my life, I stood before something I could not control.


iii.
I wrote her a letter. A real, handwritten letter. My hands were trembling. In an age where people confess feelings through texts they can delete, through DMs they can unsend, I chose ink on paper. Permanent, irreversible, terrifying. I gave it to her in Berlin, and in that moment I felt more exposed than I had ever felt in front of a camera, an audience, or a crowd.

She was kind. She told me, days later, with grace and respect, that she wasn't looking for a relationship. That her focus was on building her vision, her business, her life. And you know what? I loved that about her. I love it still. A woman who knows what she wants and has the discipline to pursue it. That is not rejection. That is focus. And I respect it more than she will ever know.

But between the moment I handed her that letter and the moment she responded, there was a silence. And in that silence, my mind did what unhealed minds do. It spiraled. I convinced myself I had frightened her. That the look on her face was not surprise but disgust. That I was too much, too strange, too broken to be wanted. I carried that for a long time. It sat in my chest like a stone.

I am telling you this not for sympathy, but for honesty. Because if I am going to write about love, I have to start with what I got wrong.


iv.
What I felt was not love. It was limerence.

Limerence is what happens when your mind fixates on someone and builds a cathedral out of a conversation. It is the fever dream of connection. Intense, beautiful, and fundamentally incomplete. It lives in the absence of knowing someone fully. It survives on uncertainty, on the question mark, on the space between "maybe" and "never." The less you know, the more your imagination fills in the gaps, and what it builds is intoxicating. But it is architecture without a foundation.

Real love is nothing like this.

I know what real love looks like, because I watched it my entire life. My mother and my father. They didn't have fireworks. They had something far greater. They had decades. They had two people who carried more than they should have been able to, and still chose each other every single morning. They had nights of worry about money and mornings of figuring it out together. They had my father, a factory worker who never complained about a life that was heavier than anyone knew. And my mother, who worked as a cleaner, then at forty years old decided to go back to school, study, and become the first person in her family to earn a university degree. And my father, who never once made her feel small for wanting more.

Without my mother, my father would not have been half the man he was. And I believe he would say the same. That is love. Not the trembling, not the obsession, not the letters written with shaking hands. Love is what remains after limerence burns out. It is built in years of fighting side by side. In shared missions and shared silence. In the way someone holds your hand not because their heart is racing, but because their heart is steady.


v.
My grandfather, and I am laughing as I write this, once climbed a minaret in Turkey and threatened to jump if he couldn't be with my grandmother. I come from a lineage of men who love recklessly, dramatically, almost absurdly. There is something beautiful about that. But there is also something I want to do differently.

I don't just want to find the right woman. I want to be the right man.

This is the part most people skip. Everyone talks about what they want in a partner. Loyalty, ambition, beauty, faith. Few talk about what they are building in themselves to deserve it. I want to be the kind of husband whose wife looks at him and thinks: He makes me braver. The kind of father whose children grow up knowing what a good man looks like, not because he told them, but because he showed them. The kind of partner who supports his wife's dreams with the same intensity he pursues his own. Not behind her. Not in front of her. Beside her.


vi.
I want a woman with her own agenda. Her own fire. Her own vision she is building with her own hands. I don't want to be someone's world. That is too much pressure for any one person. I want to be part of a shared universe. Two people with their own orbits, choosing to revolve around the same sun.

Nationality doesn't matter to me. Background doesn't matter. What matters is character. Values. Whether we are on the same wavelength. Whether she can build an empire by day and live simply in the mountains by night. Whether she can conquer the world by day and still long for a quiet life with goats and tea and peace. I want someone who holds both of these worlds inside her, because I hold both inside me.

And I want us to build something that outlasts this life entirely. I don't just want a partner for the Dunya. I want a partner for the Akhira. Someone I will stand beside not only in this world, but in the next.

I read something recently that stayed with me. Someone asked: what matters more, the journey or the destination? The answer was: the company. I could not agree more.


vii.
I think the reason love is so difficult for someone like me is that it demands the one thing I have spent my entire life avoiding. Surrender.

I have always been the person who figures things out. The one who finds the pattern, builds the system, solves the problem before it becomes one. Control is not just a habit for me. It is how I survived. It is how I turned a 2.0 GPA into a perfect 4.0. It is how I built everything I have from nothing.

But love does not respect control. It does not care how prepared you are. It walks in without permission and rearranges the furniture of your mind. And the hardest part is not the feeling itself. It is accepting that you cannot earn it, force it, or fix it. You can only stand still, open, and hope that what is meant for you recognizes you too.

And there is certainly no strategy for letting go of someone you were never allowed to hold.


viii.
I don't know if the woman I once wrote a letter to will ever read this. Part of me hopes she does. Part of me hopes she doesn't, because I never want her to feel burdened by feelings she did not ask for. I have kept my distance. Not because my feelings faded, but because I respect her enough to let her live her life uninterrupted by mine.

I have accepted that we may never be together. And I mean that. Not as a performance of maturity, but as a genuine resting place my heart has found. I don't know if what I experienced was a test of acceptance or a test of patience. In Islam, we call this sabr. The beautiful, aching discipline of trusting Allah's timing even when your own heart is screaming for an answer. Maybe He placed this longing in me to teach me that only His love is permanent. Maybe He separated my heart from hers to protect something I cannot yet see. Maybe the wait is longer than I imagined. Or maybe the destination was never her at all.

Either way, I am at peace. My heart is at ease, knowing that what is meant for me will never miss me, and what misses me was never meant for me.

And if He does bring us together one day, in a way that honors both of us, in a time that is right for both of us, then I would not simply be happy. I would be the most grateful man alive. And I would spend the rest of my life proving that the patience was worth it.


ix.
I want to tell you about the moment that changed everything.

When my father passed, I washed his body. In Islam, we wash our dead before burial. I chose to do it myself. I stood there, hands wet, looking at the body of the man who raised me, the man who worked in a factory his whole life so that I could dream bigger, and something hit me like lightning.

Every single thing in this life is worth feeling.

Every heartbreak. Every rejection. Every letter written with trembling hands that went unanswered. Every silent prayer at 3 AM. Every moment of longing for someone who may never long for you back. All of it. Every emotion, every blow that fate delivers, every triumph and every loss. It is all evidence that you are alive. That your heart works. That you are capable of feeling something so deeply that it reshapes you.

I used to think unrequited love was a waste. Now I see it differently. The love I carry, whether it is ever returned or not, has made me softer. Kinder. More human. It broke open a version of me that strategies and systems never could. And for that, I am grateful.

I do not know who my wife will be. I have someone in my heart, but Allah knows best. What I do know is this: I am not waiting for someone to complete me. I am becoming complete on my own. Everything I am building in myself right now, every lesson, every prayer, every quiet act of growth, my future wife will one day benefit from all of it. Not because I did it for her. But because I did it for the man I want to be when she arrives.

Love is not about finding someone. It is about building someone. Yourself.`,
    },
  },
  {
    slug: "the-turkish-guest-worker",
    title: {
      de: "Der Türkische Gastarbeiter",
      en: "The Turkish Guest Worker",
    },
    description: {
      de: "Die Origin Story meines Vaters. Kommt bald.",
      en: "My father's origin story. Coming soon.",
    },
    date: "01.03.26",
    comingSoon: true,
  },
];

export default essays;

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}