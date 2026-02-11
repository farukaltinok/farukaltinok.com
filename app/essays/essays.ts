import type { Lang } from "../components/LanguageContext";

export type Essay = {
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  date: string;
  comingSoon?: boolean;
  content?: Record<Lang, string>;
};

// ➜ Neueste Essays immer OBEN einfügen
const essays: Essay[] = [
  {
    slug: "der-tuerkische-gastarbeiter",
    title: {
      de: "Der Türkische Gastarbeiter",
      en: "The Turkish Guest Worker",
    },
    description: {
      de: "",
      en: "",
    },
    date: "10.02.26",
    comingSoon: true,
  },
  {
    slug: "der-geschmack-des-todes",
    title: {
      de: "Der Geschmack des Todes",
      en: "The Taste of Death",
    },
    description: {
      de: "Über den Tod meines Vaters und ein Versprechen an meine Mutter.",
      en: "About the death of my father and a promise to my mother.",
    },
    date: "04.02.26",
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
Every soul shall taste death.
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

This is not a goal meant to look good on a list. It’s a promise.

Today, many things that had been blurry for years are suddenly sharp. I feel clarity again.

Maybe that's the taste of death. Not just that it's bitter. But that it wakes you up. That it brutally shows you what matters. And that it leaves you no excuses.

Today was his day.

May Allah have mercy on him. And may He grant us all strength, success, and health.

إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ`,
    },
  },
];

export default essays;

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}