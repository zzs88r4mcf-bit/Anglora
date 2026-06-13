import type { DayContent } from '@/types';

// ─── Days 1–15 ────────────────────────────────────────────────────────────────
export const days1to15: DayContent[] = [
  {
    id: 1,
    theme: `Salutations & Présent Simple`,
    vocabulary: [
      { en: `hello`, fr: `bonjour / salut`, exampleEn: `Hello! How are you doing today?`, exampleFr: `Bonjour ! Comment tu vas aujourd'hui ?` },
      { en: `goodbye`, fr: `au revoir`, exampleEn: `Goodbye! See you tomorrow!`, exampleFr: `Au revoir ! À demain !` },
      { en: `name`, fr: `prénom / nom`, exampleEn: `My name is Sarah. What's yours?`, exampleFr: `Je m'appelle Sarah. Et toi ?` },
      { en: `nice`, fr: `sympa / agréable`, exampleEn: `It's really nice to meet you!`, exampleFr: `C'est vraiment sympa de te rencontrer !` },
      { en: `meet`, fr: `rencontrer`, exampleEn: `I'd love to meet your friends.`, exampleFr: `J'adorerais rencontrer tes amis.` },
      { en: `from`, fr: `venir de / de`, exampleEn: `Where are you from? I'm from Paris.`, exampleFr: `Tu viens d'où ? Je viens de Paris.` },
      { en: `live`, fr: `habiter / vivre`, exampleEn: `I live in London with my flatmate.`, exampleFr: `J'habite à Londres avec mon coloc.` },
      { en: `work`, fr: `travailler / travail`, exampleEn: `I work at a coffee shop downtown.`, exampleFr: `Je travaille dans un café en centre-ville.` },
      { en: `study`, fr: `étudier`, exampleEn: `She studies medicine at university.`, exampleFr: `Elle étudie la médecine à l'université.` },
      { en: `like`, fr: `aimer / bien aimer`, exampleEn: `I like watching Netflix in the evening.`, exampleFr: `J'aime regarder Netflix le soir.` },
      { en: `friend`, fr: `ami(e)`, exampleEn: `She's my best friend. We met at school.`, exampleFr: `C'est ma meilleure amie. On s'est rencontrées à l'école.` },
      { en: `morning`, fr: `matin`, exampleEn: `I always have coffee in the morning.`, exampleFr: `Je bois toujours un café le matin.` },
      { en: `evening`, fr: `soir`, exampleEn: `What are you doing this evening?`, exampleFr: `Tu fais quoi ce soir ?` },
      { en: `today`, fr: `aujourd'hui`, exampleEn: `Today is Monday. I have a lot to do.`, exampleFr: `Aujourd'hui c'est lundi. J'ai beaucoup à faire.` },
      { en: `year`, fr: `an / année`, exampleEn: `I've been here for two years.`, exampleFr: `Je suis ici depuis deux ans.` },
      { en: `speak`, fr: `parler`, exampleEn: `Do you speak any other languages?`, exampleFr: `Tu parles d'autres langues ?` },
      { en: `really`, fr: `vraiment / trop`, exampleEn: `I'm really happy to be here.`, exampleFr: `Je suis vraiment contente d'être ici.` },
      { en: `actually`, fr: `en fait / à vrai dire`, exampleEn: `I'm actually from the south of France.`, exampleFr: `En fait, je viens du sud de la France.` },
      { en: `guess`, fr: `deviner`, exampleEn: `Guess what? I got the job!`, exampleFr: `Devine quoi ? J'ai eu le poste !` },
      { en: `anyway`, fr: `bref / de toute façon`, exampleEn: `Anyway, it was nice talking to you!`, exampleFr: `Bref, c'était sympa de te parler !` },
    ],
    expressions: [
      { expression: `What's your name?`, translation: `Comment tu t'appelles ?`, example: `Hey, what's your name? I'm Jake.`, exampleTranslation: `Hé, comment tu t'appelles ? Moi c'est Jake.` },
      { expression: `Nice to meet you!`, translation: `Ravi(e) de te rencontrer !`, example: `Nice to meet you! I've heard a lot about you.`, exampleTranslation: `Ravi de te rencontrer ! J'ai beaucoup entendu parler de toi.` },
      { expression: `Where are you from?`, translation: `Tu viens d'où ?`, example: `So, where are you from originally?`, exampleTranslation: `Alors, tu viens d'où à l'origine ?` },
      { expression: `How are you?`, translation: `Comment tu vas ?`, example: `Hey! How are you? Long time no see!`, exampleTranslation: `Hé ! Comment tu vas ? Ça fait longtemps !` },
      { expression: `Not bad, thanks!`, translation: `Pas mal, merci !`, example: `Not bad, thanks! A bit tired but okay.`, exampleTranslation: `Pas mal, merci ! Un peu fatiguée mais ça va.` },
      { expression: `See you later!`, translation: `À plus tard !`, example: `I gotta run. See you later!`, exampleTranslation: `Je dois filer. À plus tard !` },
      { expression: `Take care!`, translation: `Prends soin de toi !`, example: `Have a safe trip! Take care!`, exampleTranslation: `Bon voyage ! Prends soin de toi !` },
      { expression: `What do you do?`, translation: `Tu fais quoi dans la vie ?`, example: `So what do you do? Are you a student?`, exampleTranslation: `Alors tu fais quoi dans la vie ? Tu es étudiant(e) ?` },
      { expression: `I'm learning English.`, translation: `J'apprends l'anglais.`, example: `Sorry if I make mistakes — I'm learning English.`, exampleTranslation: `Désolée si je fais des erreurs — j'apprends l'anglais.` },
      { expression: `Have a great day!`, translation: `Bonne journée !`, example: `Thanks for your help! Have a great day!`, exampleTranslation: `Merci pour ton aide ! Bonne journée !` },
    ],
    grammar: { title: `Le Présent Simple : parler de ses habitudes`, content: `En anglais, le présent simple sert à décrire des habitudes, des faits ou des vérités générales.

Formation :
• I / You / We / They + verbe de base → I live, You work, They study
• He / She / It + verbe + -s → She lives, He works, It starts

Exemples :
✅ I live in Paris. (J'habite à Paris.)
✅ She works at a café. (Elle travaille dans un café.)
✅ They study English. (Ils étudient l'anglais.)

Attention : avec he/she/it, on ajoute -s au verbe !
I like → He likes
I watch → She watches

Pour les questions : Do you like...? / Does she live...?` },
    exercises: [
      { id: `1-t1`, type: "translation", question: `Je m'appelle Emma. Et toi ?`, answers: [`My name is Emma. What about you?`, `My name is Emma. And you?`, `I'm Emma. What about you?`, `I'm Emma. And you?`] },
      { id: `1-t2`, type: "translation", question: `Elle habite à Londres avec ses amis.`, answers: [`She lives in London with her friends.`, `She lives in London with her friends`, `She lives with her friends in London.`] },
      { id: `1-t3`, type: "translation", question: `Tu viens d'où ?`, answers: [`Where are you from?`, `Where do you come from?`] },
      { id: `1-t4`, type: "translation", question: `Je travaille dans un café le matin.`, answers: [`I work in a café in the morning.`, `I work at a café in the morning.`, `I work in a coffee shop in the morning.`, `I work at a coffee shop in the morning.`] },
      { id: `1-t5`, type: "translation", question: `Ravi de te rencontrer ! J'ai entendu parler de toi.`, answers: [`Nice to meet you! I've heard about you.`, `Nice to meet you! I heard about you.`, `Great to meet you! I've heard about you.`] },
      { id: `1-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`lives`, `She`, `London`, `in`, `flatmate`, `her`, `with`], answer: `She lives in London with her flatmate.` },
      { id: `1-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`do`, `What`, `you`, `do`, `?`], answer: `What do you do?` },
      { id: `1-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`English`, `studying`, `I'm`, `really`, `enjoy`, `and`, `I`, `it`], answer: `I'm studying English and I really enjoy it.` },
      { id: `1-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`are`, `from`, `you`, `Where`, `?`], answer: `Where are you from?` },
      { id: `1-f1`, type: "fill-blank", question: `My ___ is Sarah. Nice to meet you!`, hint: `Quel mot manque ? (prénom / nom)`, answers: [`name`] },
      { id: `1-f2`, type: "fill-blank", question: `She ___ in Paris but she's from Lyon.`, hint: `Habiter (she = 3e personne)`, answers: [`lives`] },
      { id: `1-f3`, type: "fill-blank", question: `I ___ coffee in the morning. It wakes me up!`, hint: `Aimer (1re personne)`, answers: [`love`, `like`, `enjoy`, `drink`] },
      { id: `1-f4`, type: "fill-blank", question: `___ you speak any other languages?`, hint: `Question avec 'you'`, answers: [`Do`, `Can`] },
      { id: `1-m1`, type: "mcq", question: `Comment dit-on « Il travaille dans un café » ?`, options: [`He work in a café.`, `He works in a café.`, `He working in a café.`, `He is work in a café.`], correctIndex: 1, explanation: `Avec 'he', on ajoute -s au verbe : works.` },
      { id: `1-m2`, type: "mcq", question: `Laquelle de ces phrases est correcte ?`, options: [`She like watching Netflix.`, `She likes watching Netflix.`, `She liking Netflix.`, `She do like Netflix.`], correctIndex: 1, explanation: `He/she/it → verbe + s : likes.` },
      { id: `1-m3`, type: "mcq", question: `Comment demander le prénom de quelqu'un ?`, options: [`How is your name?`, `What's your name?`, `Which is your name?`, `Who is your name?`], correctIndex: 1, explanation: `On dit 'What's your name?' pour demander le prénom.` },
      { id: `1-m4`, type: "mcq", question: `Que signifie 'Take care!' ?`, options: [`Fais attention à la voiture !`, `Prends soin de toi !`, `Fais le ménage !`, `Occupe-toi de ça !`], correctIndex: 1, explanation: `'Take care!' = Prends soin de toi ! (formule d'au revoir)` },
      { id: `1-g1`, type: "guided", question: `Construis une phrase avec : 'live', 'Paris', 'friends'`, words: [`live`, `Paris`, `friends`, `with`, `my`, `in`, `I`], answers: [`I live in Paris with my friends.`, `I live with my friends in Paris.`] },
      { id: `1-g2`, type: "guided", question: `Construis une phrase avec : 'study', 'English', 'evening'`, words: [`study`, `English`, `the`, `evening`, `in`, `I`], answers: [`I study English in the evening.`] },
      { id: `1-g3`, type: "guided", question: `Construis une phrase avec : 'nice', 'meet', 'you'`, words: [`nice`, `meet`, `to`, `you`, `It's`], answers: [`It's nice to meet you.`, `Nice to meet you.`] },
    ],
  },
  {
    id: 2,
    theme: `La Vie Quotidienne`,
    vocabulary: [
      { en: `wake up`, fr: `se réveiller`, exampleEn: `I wake up at seven every morning.`, exampleFr: `Je me réveille à sept heures chaque matin.` },
      { en: `shower`, fr: `douche / se doucher`, exampleEn: `I always take a shower before work.`, exampleFr: `Je prends toujours une douche avant le travail.` },
      { en: `breakfast`, fr: `petit-déjeuner`, exampleEn: `I never skip breakfast.`, exampleFr: `Je ne saute jamais le petit-déjeuner.` },
      { en: `coffee`, fr: `café`, exampleEn: `I can't function without my morning coffee.`, exampleFr: `Je ne peux pas fonctionner sans mon café du matin.` },
      { en: `commute`, fr: `trajet domicile-travail`, exampleEn: `My commute takes about forty minutes.`, exampleFr: `Mon trajet dure environ quarante minutes.` },
      { en: `office`, fr: `bureau / open space`, exampleEn: `I work from home two days a week, not always in the office.`, exampleFr: `Je travaille de chez moi deux jours par semaine, pas toujours au bureau.` },
      { en: `lunch break`, fr: `pause déjeuner`, exampleEn: `We usually eat out during lunch break.`, exampleFr: `On mange généralement dehors pendant la pause déjeuner.` },
      { en: `tired`, fr: `fatigué(e)`, exampleEn: `I'm so tired. I barely slept last night.`, exampleFr: `Je suis tellement fatiguée. J'ai à peine dormi la nuit dernière.` },
      { en: `busy`, fr: `occupé(e)`, exampleEn: `Sorry, I'm really busy right now. Can I call you back?`, exampleFr: `Désolée, je suis vraiment occupée là. Je peux te rappeler ?` },
      { en: `routine`, fr: `routine`, exampleEn: `I love my morning routine. It sets the tone for the day.`, exampleFr: `J'adore ma routine matinale. Ça donne le ton pour la journée.` },
      { en: `chores`, fr: `tâches ménagères`, exampleEn: `I hate doing chores but someone's gotta do it.`, exampleFr: `Je déteste faire les tâches ménagères mais quelqu'un doit le faire.` },
      { en: `cook`, fr: `cuisiner`, exampleEn: `I cook dinner every evening. It relaxes me.`, exampleFr: `Je cuisine le dîner chaque soir. Ça me détend.` },
      { en: `grocery store`, fr: `supermarché / épicerie`, exampleEn: `I stop by the grocery store on my way home.`, exampleFr: `Je m'arrête à l'épicerie sur le chemin du retour.` },
      { en: `bedtime`, fr: `l'heure de se coucher`, exampleEn: `My bedtime is around eleven. I need eight hours of sleep.`, exampleFr: `Je me couche vers onze heures. J'ai besoin de huit heures de sommeil.` },
      { en: `alarm`, fr: `réveil / alarme`, exampleEn: `I set three alarms because I always sleep through the first one.`, exampleFr: `Je mets trois réveils parce que je rate toujours le premier.` },
      { en: `rush`, fr: `se dépêcher / être pressé`, exampleEn: `I'm always in a rush on Monday mornings.`, exampleFr: `Je suis toujours pressée le lundi matin.` },
      { en: `grab`, fr: `attraper / prendre vite`, exampleEn: `I grabbed a coffee on the way to the bus.`, exampleFr: `J'ai pris un café en vitesse avant le bus.` },
      { en: `scroll`, fr: `faire défiler (son téléphone)`, exampleEn: `I scroll through Instagram before getting up.`, exampleFr: `Je fais défiler Instagram avant de me lever.` },
      { en: `barely`, fr: `à peine`, exampleEn: `I barely had time to eat this morning.`, exampleFr: `J'ai à peine eu le temps de manger ce matin.` },
      { en: `somehow`, fr: `d'une façon ou d'une autre / je ne sais pas comment`, exampleEn: `I somehow managed to be on time.`, exampleFr: `Je ne sais pas comment, mais j'ai réussi à être à l'heure.` },
    ],
    expressions: [
      { expression: `I'm running late.`, translation: `Je suis en retard.`, example: `Sorry! I'm running late. Be there in 10.`, exampleTranslation: `Désolée ! Je suis en retard. J'arrive dans 10 min.` },
      { expression: `I can't function without coffee.`, translation: `Je ne peux pas fonctionner sans café.`, example: `Don't talk to me before my coffee — I can't function.`, exampleTranslation: `Ne me parle pas avant mon café — je suis incapable de fonctionner.` },
      { expression: `I'm dead tired.`, translation: `Je suis épuisée.`, example: `I'm dead tired. It was a crazy week.`, exampleTranslation: `Je suis épuisée. C'était une semaine de folie.` },
      { expression: `Time flies.`, translation: `Le temps passe vite.`, example: `Time flies when you're having fun!`, exampleTranslation: `Le temps passe vite quand on s'amuse !` },
      { expression: `Better late than never.`, translation: `Mieux vaut tard que jamais.`, example: `She finally called me back. Better late than never, I guess.`, exampleTranslation: `Elle m'a enfin rappelée. Mieux vaut tard que jamais, j'imagine.` },
      { expression: `I need a break.`, translation: `J'ai besoin d'une pause.`, example: `I've been working for four hours straight. I need a break.`, exampleTranslation: `Je travaille depuis quatre heures d'affilée. J'ai besoin d'une pause.` },
      { expression: `First things first.`, translation: `Commençons par le commencement.`, example: `First things first — have you eaten today?`, exampleTranslation: `Commençons par le commencement — tu as mangé aujourd'hui ?` },
      { expression: `On my way.`, translation: `J'arrive / Je suis en chemin.`, example: `Just leaving now. On my way!`, exampleTranslation: `Je pars maintenant. J'arrive !` },
      { expression: `What a day!`, translation: `Quelle journée !`, example: `What a day. Everything went wrong.`, exampleTranslation: `Quelle journée. Tout s'est mal passé.` },
      { expression: `I slept through my alarm.`, translation: `Je n'ai pas entendu mon réveil.`, example: `I slept through my alarm again. My boss is going to kill me.`, exampleTranslation: `Je n'ai pas entendu mon réveil encore une fois. Mon patron va me tuer.` },
    ],
    grammar: { title: `La fréquence avec always, usually, often, sometimes, never`, content: `Pour parler de tes habitudes, utilise ces mots de fréquence :

• always (toujours) → I always drink coffee in the morning.
• usually (d'habitude) → I usually take the bus.
• often (souvent) → I often cook at home.
• sometimes (parfois) → I sometimes skip breakfast.
• never (jamais) → I never wake up before seven.

Où les placer ?
Ces mots se placent AVANT le verbe principal :
✅ I always wake up late.
✅ She never eats breakfast.

Mais APRÈS le verbe 'to be' :
✅ I'm always tired on Mondays.
✅ He's never on time.` },
    exercises: [
      { id: `2-t1`, type: "translation", question: `Je me réveille toujours en retard le lundi.`, answers: [`I always wake up late on Monday.`, `I always wake up late on Mondays.`, `I'm always late on Mondays.`] },
      { id: `2-t2`, type: "translation", question: `Elle prend une douche avant le travail.`, answers: [`She takes a shower before work.`, `She showers before work.`, `She has a shower before work.`] },
      { id: `2-t3`, type: "translation", question: `Je n'ai pas entendu mon réveil ce matin.`, answers: [`I slept through my alarm this morning.`, `I didn't hear my alarm this morning.`, `I missed my alarm this morning.`] },
      { id: `2-t4`, type: "translation", question: `Je suis toujours occupée le lundi matin.`, answers: [`I'm always busy on Monday morning.`, `I'm always busy on Monday mornings.`, `I'm always busy in the morning on Mondays.`] },
      { id: `2-t5`, type: "translation", question: `D'une façon ou d'une autre, j'ai réussi à être à l'heure.`, answers: [`I somehow managed to be on time.`, `Somehow I managed to be on time.`, `Somehow, I was on time.`] },
      { id: `2-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`before`, `I`, `shower`, `always`, `work`, `a`, `take`], answer: `I always take a shower before work.` },
      { id: `2-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`busy`, `Monday`, `mornings`, `I'm`, `always`, `on`], answer: `I'm always busy on Monday mornings.` },
      { id: `2-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`never`, `She`, `breakfast`, `skips`], answer: `She never skips breakfast.` },
      { id: `2-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`on`, `my`, `I`, `way`, `home`, `stop`, `the`, `store`, `by`], answer: `I stop by the store on my way home.` },
      { id: `2-f1`, type: "fill-blank", question: `I ___ through my alarm and was late for work.`, hint: `Ne pas entendre son réveil`, answers: [`slept`] },
      { id: `2-f2`, type: "fill-blank", question: `She's ___ in a rush on Monday mornings.`, hint: `Toujours`, answers: [`always`] },
      { id: `2-f3`, type: "fill-blank", question: `I ___ time to eat this morning.`, hint: `À peine eu...`, answers: [`barely had`, `didn't have`] },
      { id: `2-f4`, type: "fill-blank", question: `I need a ___. I've been working for hours.`, hint: `Pause`, answers: [`break`] },
      { id: `2-m1`, type: "mcq", question: `Que signifie 'I'm running late' ?`, options: [`Je cours tous les matins.`, `Je suis en retard.`, `Je court à côté.`, `Je fais du running tard.`], correctIndex: 1, explanation: `'Running late' = être en retard (rien à voir avec courir).` },
      { id: `2-m2`, type: "mcq", question: `Où placer 'always' dans : 'She ___ is / is ___ tired on Mondays' ?`, options: [`She always is tired.`, `She is always tired.`, `Always she is tired.`, `She is tired always.`], correctIndex: 1, explanation: `Après le verbe 'to be' : She is always tired.` },
      { id: `2-m3`, type: "mcq", question: `Comment dit-on 'je ne saute jamais le petit-déjeuner' ?`, options: [`I never skip breakfast.`, `I always skip breakfast.`, `I don't never skip breakfast.`, `I skip never breakfast.`], correctIndex: 0, explanation: `'Never' se place avant le verbe principal : never skip.` },
      { id: `2-m4`, type: "mcq", question: `Que veut dire 'What a day!' ?`, options: [`Quelle heure est-il ?`, `Quel jour sommes-nous ?`, `Quelle journée !`, `C'est quoi ce jour ?`], correctIndex: 2, explanation: `'What a day!' exprime l'épuisement ou la surprise face à une journée intense.` },
      { id: `2-g1`, type: "guided", question: `Construis une phrase avec : 'always', 'coffee', 'morning'`, words: [`always`, `I`, `coffee`, `in`, `the`, `drink`, `morning`], answers: [`I always drink coffee in the morning.`, `I always have coffee in the morning.`] },
      { id: `2-g2`, type: "guided", question: `Construis une phrase avec : 'tired', 'dead', 'week'`, words: [`dead`, `I'm`, `this`, `tired`, `week`, `after`], answers: [`I'm dead tired after this week.`, `I'm dead tired this week.`] },
      { id: `2-g3`, type: "guided", question: `Construis une phrase avec : 'commute', 'forty', 'minutes'`, words: [`commute`, `takes`, `My`, `forty`, `minutes`, `about`], answers: [`My commute takes about forty minutes.`] },
    ],
  },
  {
    id: 3,
    theme: `Nourriture & Restaurants`,
    vocabulary: [
      { en: `hungry`, fr: `avoir faim`, exampleEn: `I'm starving. Can we grab something to eat?`, exampleFr: `Je meurs de faim. On peut manger quelque chose ?` },
      { en: `delicious`, fr: `délicieux`, exampleEn: `This pasta is absolutely delicious!`, exampleFr: `Ces pâtes sont absolument délicieuses !` },
      { en: `menu`, fr: `menu / carte`, exampleEn: `Can I get the menu, please?`, exampleFr: `Je peux avoir le menu, s'il vous plaît ?` },
      { en: `order`, fr: `commander`, exampleEn: `Are you ready to order?`, exampleFr: `Vous êtes prêt(e) à commander ?` },
      { en: `waiter`, fr: `serveur`, exampleEn: `Excuse me, waiter! Can we get the check?`, exampleFr: `Excusez-moi, garçon ! On peut avoir l'addition ?` },
      { en: `check`, fr: `addition`, exampleEn: `Could we get the check when you have a moment?`, exampleFr: `On pourrait avoir l'addition quand vous avez un moment ?` },
      { en: `tip`, fr: `pourboire`, exampleEn: `Should we leave a tip? The service was great.`, exampleFr: `On laisse un pourboire ? Le service était super.` },
      { en: `takeout`, fr: `à emporter`, exampleEn: `I'm too tired to cook. Let's get takeout.`, exampleFr: `Je suis trop fatiguée pour cuisiner. On se commande à emporter.` },
      { en: `leftovers`, fr: `restes`, exampleEn: `I'm having leftovers for lunch.`, exampleFr: `Je mange les restes pour le déjeuner.` },
      { en: `recipe`, fr: `recette`, exampleEn: `Can you share that recipe? It looks amazing!`, exampleFr: `Tu peux partager cette recette ? Ça a l'air incroyable !` },
      { en: `snack`, fr: `collation / snack`, exampleEn: `I need a snack. I can't make it to dinner.`, exampleFr: `J'ai besoin d'un snack. Je n'arriverai pas jusqu'au dîner.` },
      { en: `spicy`, fr: `épicé`, exampleEn: `How spicy is this dish? I can't handle too much heat.`, exampleFr: `C'est épicé comme plat ? Je ne supporte pas trop le piment.` },
      { en: `vegetarian`, fr: `végétarien(ne)`, exampleEn: `Are there any vegetarian options on the menu?`, exampleFr: `Il y a des options végétariennes sur la carte ?` },
      { en: `portion`, fr: `portion`, exampleEn: `The portions here are massive. I can't finish it.`, exampleFr: `Les portions ici sont énormes. Je n'arrive pas à finir.` },
      { en: `reservation`, fr: `réservation`, exampleEn: `Do you have a reservation? It's very busy tonight.`, exampleFr: `Vous avez une réservation ? C'est très animé ce soir.` },
      { en: `packed`, fr: `bondé / plein`, exampleEn: `This place is always packed on Friday nights.`, exampleFr: `Cet endroit est toujours bondé le vendredi soir.` },
      { en: `picky`, fr: `difficile (sur la nourriture)`, exampleEn: `My brother is so picky. He never tries new food.`, exampleFr: `Mon frère est tellement difficile. Il ne goûte jamais de nouveaux plats.` },
      { en: `craving`, fr: `envie soudaine / fringale`, exampleEn: `I have a craving for pizza right now.`, exampleFr: `J'ai une fringale de pizza là maintenant.` },
      { en: `stuff`, fr: `truc / chose (informel)`, exampleEn: `What's this stuff in my salad?`, exampleFr: `C'est quoi ce truc dans ma salade ?` },
      { en: `bite`, fr: `bouchée`, exampleEn: `Can I have a bite of your sandwich?`, exampleFr: `Je peux goûter ton sandwich ?` },
    ],
    expressions: [
      { expression: `I'm starving!`, translation: `Je meurs de faim !`, example: `I haven't eaten since this morning. I'm starving!`, exampleTranslation: `Je n'ai pas mangé depuis ce matin. Je meurs de faim !` },
      { expression: `Let's grab a bite.`, translation: `Allons manger un morceau.`, example: `I only have 20 minutes. Let's just grab a bite nearby.`, exampleTranslation: `J'ai seulement 20 minutes. On va juste manger un morceau pas loin.` },
      { expression: `Can I get the check?`, translation: `L'addition, s'il vous plaît.`, example: `We're done. Can I get the check, please?`, exampleTranslation: `On a fini. L'addition, s'il vous plaît.` },
      { expression: `It's on me.`, translation: `C'est moi qui paie.`, example: `Don't worry about it — it's on me tonight.`, exampleTranslation: `Ne t'en fais pas — c'est moi qui paie ce soir.` },
      { expression: `That hits the spot.`, translation: `C'est exactement ce qu'il me fallait.`, example: `A hot soup on a cold day? That really hits the spot.`, exampleTranslation: `Une soupe chaude par temps froid ? C'est exactement ce qu'il me fallait.` },
      { expression: `I have a sweet tooth.`, translation: `J'adore les sucreries.`, example: `I have such a sweet tooth. I can never say no to dessert.`, exampleTranslation: `J'adore tellement les sucreries. Je ne peux jamais refuser un dessert.` },
      { expression: `What's today's special?`, translation: `Quel est le plat du jour ?`, example: `Excuse me, what's today's special?`, exampleTranslation: `Excusez-moi, quel est le plat du jour ?` },
      { expression: `I'll have...`, translation: `Je vais prendre...`, example: `I'll have the burger and a side salad, please.`, exampleTranslation: `Je vais prendre le burger et une salade, s'il vous plaît.` },
      { expression: `Can you split the bill?`, translation: `On peut payer séparément ?`, example: `Can we split the bill? We each had different things.`, exampleTranslation: `On peut payer séparément ? On a commandé des choses différentes.` },
      { expression: `I could eat a horse.`, translation: `J'ai une faim de loup.`, example: `I skipped lunch and dinner. I could eat a horse right now!`, exampleTranslation: `J'ai sauté le déjeuner et le dîner. J'ai une faim de loup !` },
    ],
    grammar: { title: `Exprimer la quantité : some, any, a lot of, a few`, content: `En anglais, on ne dit pas 'des' comme en français. On utilise :

• some → dans les phrases affirmatives
  ✅ I want some coffee. / There's some food left.

• any → dans les questions et les phrases négatives
  ✅ Do you have any leftovers?
  ✅ I don't have any money.

• a lot of → une grande quantité
  ✅ There's a lot of food at this restaurant.

• a few → un petit nombre (avec des choses qu'on peut compter)
  ✅ I have a few friends who are vegetarian.

• a little → une petite quantité (avec des choses qu'on ne compte pas)
  ✅ Can I have a little more sauce?` },
    exercises: [
      { id: `3-t1`, type: "translation", question: `Je meurs de faim. On peut manger quelque chose ?`, answers: [`I'm starving. Can we grab something to eat?`, `I'm starving. Can we get something to eat?`, `I'm starving! Can we eat something?`] },
      { id: `3-t2`, type: "translation", question: `Ces pâtes sont absolument délicieuses !`, answers: [`This pasta is absolutely delicious!`, `These noodles are absolutely delicious!`, `This pasta is so delicious!`] },
      { id: `3-t3`, type: "translation", question: `L'addition, s'il vous plaît.`, answers: [`Can I get the check, please?`, `Can we get the check, please?`, `Could we have the check, please?`, `Check, please!`] },
      { id: `3-t4`, type: "translation", question: `J'ai une fringale de pizza là maintenant.`, answers: [`I have a craving for pizza right now.`, `I'm craving pizza right now.`, `I really want pizza right now.`] },
      { id: `3-t5`, type: "translation", question: `C'est moi qui paie ce soir.`, answers: [`It's on me tonight.`, `Dinner's on me tonight.`, `I'm paying tonight.`] },
      { id: `3-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`ready`, `you`, `Are`, `order`, `to`, `?`], answer: `Are you ready to order?` },
      { id: `3-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`have`, `craving`, `pizza`, `for`, `I`, `a`], answer: `I have a craving for pizza.` },
      { id: `3-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`packed`, `always`, `Friday`, `on`, `This`, `nights`, `is`, `place`], answer: `This place is always packed on Friday nights.` },
      { id: `3-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`any`, `there`, `options`, `Are`, `vegetarian`, `?`], answer: `Are there any vegetarian options?` },
      { id: `3-f1`, type: "fill-blank", question: `I'm ___. I haven't eaten since this morning!`, hint: `Mourir de faim`, answers: [`starving`, `so hungry`, `really hungry`] },
      { id: `3-f2`, type: "fill-blank", question: `Do you have ___ leftovers from last night?`, hint: `any / some`, answers: [`any`] },
      { id: `3-f3`, type: "fill-blank", question: `The portions here are ___ . I can never finish my plate.`, hint: `Énormes`, answers: [`massive`, `huge`, `enormous`, `huge`] },
      { id: `3-f4`, type: "fill-blank", question: `I have such a sweet ___. I love desserts!`, hint: `Expression : adorer les sucreries`, answers: [`tooth`] },
      { id: `3-m1`, type: "mcq", question: `Que signifie 'It's on me' dans un restaurant ?`, options: [`C'est sur moi.`, `C'est moi qui paie.`, `Je suis dessus.`, `C'est ma commande.`], correctIndex: 1, explanation: `'It's on me' = c'est moi qui régale / qui paie.` },
      { id: `3-m2`, type: "mcq", question: `Laquelle est correcte pour demander la carte ?`, options: [`Can I get the menu, please?`, `Can I get a menu please?`, `Give me the menu.`, `I want menu.`], correctIndex: 0, explanation: `'Can I get the menu, please?' est la formulation polie standard.` },
      { id: `3-m3`, type: "mcq", question: `Comment dit-on 'je vais prendre le poulet' au restaurant ?`, options: [`I want the chicken.`, `I'll have the chicken.`, `Give me chicken.`, `I take the chicken.`], correctIndex: 1, explanation: `'I'll have...' est la façon naturelle de commander au restaurant.` },
      { id: `3-m4`, type: "mcq", question: `Que veut dire 'I could eat a horse' ?`, options: [`Je veux du cheval.`, `Je n'ai pas faim.`, `J'ai une faim de loup.`, `Je mange lentement.`], correctIndex: 2, explanation: `'I could eat a horse' = j'ai une faim de loup (expression idiomatique).` },
      { id: `3-g1`, type: "guided", question: `Construis une phrase avec : 'bite', 'grab', 'nearby'`, words: [`grab`, `a`, `bite`, `Let's`, `nearby`], answers: [`Let's grab a bite nearby.`] },
      { id: `3-g2`, type: "guided", question: `Construis une phrase avec : 'split', 'bill', 'can'`, words: [`we`, `the`, `Can`, `split`, `bill`, `?`], answers: [`Can we split the bill?`] },
      { id: `3-g3`, type: "guided", question: `Construis une phrase avec : 'reservation', 'have', 'tonight'`, words: [`Do`, `reservation`, `you`, `have`, `a`, `tonight`, `?`], answers: [`Do you have a reservation tonight?`] },
    ],
  },
  {
    id: 4,
    theme: `Se Déplacer en Ville`,
    vocabulary: [
      { en: `bus`, fr: `bus`, exampleEn: `The bus was late again this morning.`, exampleFr: `Le bus était encore en retard ce matin.` },
      { en: `subway`, fr: `métro`, exampleEn: `It's faster to take the subway during rush hour.`, exampleFr: `C'est plus rapide de prendre le métro aux heures de pointe.` },
      { en: `cab / taxi`, fr: `taxi`, exampleEn: `Let's grab a cab. It's raining outside.`, exampleFr: `On prend un taxi. Il pleut dehors.` },
      { en: `ride`, fr: `trajet / conduire`, exampleEn: `Can you give me a ride to the station?`, exampleFr: `Tu peux me déposer à la gare ?` },
      { en: `traffic`, fr: `circulation / embouteillage`, exampleEn: `There's always terrible traffic on Friday evenings.`, exampleFr: `Il y a toujours des embouteillages terribles le vendredi soir.` },
      { en: `directions`, fr: `indications / chemin`, exampleEn: `Excuse me, can you give me directions to the station?`, exampleFr: `Excusez-moi, pouvez-vous m'indiquer le chemin de la gare ?` },
      { en: `lost`, fr: `perdu(e)`, exampleEn: `I'm completely lost. This city is huge.`, exampleFr: `Je suis complètement perdue. Cette ville est immense.` },
      { en: `shortcut`, fr: `raccourci`, exampleEn: `I know a shortcut. Follow me!`, exampleFr: `Je connais un raccourci. Suis-moi !` },
      { en: `block`, fr: `pâté de maisons`, exampleEn: `The café is just two blocks from here.`, exampleFr: `Le café est à juste deux pâtés de maisons d'ici.` },
      { en: `straight`, fr: `tout droit`, exampleEn: `Go straight and then turn left at the lights.`, exampleFr: `Allez tout droit puis tournez à gauche aux feux.` },
      { en: `corner`, fr: `coin de rue`, exampleEn: `Wait for me at the corner, okay?`, exampleFr: `Attends-moi au coin de la rue, d'accord ?` },
      { en: `rush hour`, fr: `heures de pointe`, exampleEn: `I try to avoid driving during rush hour.`, exampleFr: `J'essaie d'éviter de conduire pendant les heures de pointe.` },
      { en: `fare`, fr: `tarif / prix du trajet`, exampleEn: `The subway fare went up again this year.`, exampleFr: `Le prix du métro a encore augmenté cette année.` },
      { en: `platform`, fr: `quai`, exampleEn: `The train to Paris leaves from platform 5.`, exampleFr: `Le train pour Paris part du quai 5.` },
      { en: `on foot`, fr: `à pied`, exampleEn: `It's nice weather. Let's go on foot.`, exampleFr: `Il fait beau. Allons-y à pied.` },
      { en: `nearby`, fr: `pas loin / à proximité`, exampleEn: `Is there a pharmacy nearby?`, exampleFr: `Il y a une pharmacie pas loin ?` },
      { en: `miss`, fr: `rater (un bus/train)`, exampleEn: `I missed the last bus. Now I have to walk.`, exampleFr: `J'ai raté le dernier bus. Maintenant je dois marcher.` },
      { en: `delay`, fr: `retard`, exampleEn: `There's a twenty-minute delay on this line.`, exampleFr: `Il y a un retard de vingt minutes sur cette ligne.` },
      { en: `packed`, fr: `bondé`, exampleEn: `The subway was packed at eight in the morning.`, exampleFr: `Le métro était bondé à huit heures du matin.` },
      { en: `drop off`, fr: `déposer`, exampleEn: `Can you drop me off at the cinema?`, exampleFr: `Tu peux me déposer au cinéma ?` },
    ],
    expressions: [
      { expression: `How do I get to...?`, translation: `Comment je fais pour aller à... ?`, example: `How do I get to the city center from here?`, exampleTranslation: `Comment je fais pour aller au centre-ville d'ici ?` },
      { expression: `You can't miss it.`, translation: `Tu ne peux pas le rater.`, example: `Turn left, then it's the big red building. You can't miss it.`, exampleTranslation: `Tourne à gauche, c'est le grand bâtiment rouge. Tu ne peux pas le rater.` },
      { expression: `I'm stuck in traffic.`, translation: `Je suis coincée dans les embouteillages.`, example: `I'll be late. I'm stuck in traffic on the highway.`, exampleTranslation: `Je vais être en retard. Je suis coincée dans les embouteillages sur l'autoroute.` },
      { expression: `Can you give me a ride?`, translation: `Tu peux me déposer / m'emmener ?`, example: `My car broke down. Can you give me a ride to work?`, exampleTranslation: `Ma voiture est en panne. Tu peux m'emmener au travail ?` },
      { expression: `It's just around the corner.`, translation: `C'est juste au coin de la rue.`, example: `Don't worry, the restaurant is just around the corner.`, exampleTranslation: `Ne t'inquiète pas, le restaurant est juste au coin de la rue.` },
      { expression: `I'll take the long way.`, translation: `Je vais prendre le chemin le plus long.`, example: `The highway is jammed. I'll take the long way.`, exampleTranslation: `L'autoroute est bouchée. Je vais prendre le long chemin.` },
      { expression: `On my way!`, translation: `J'arrive ! / Je suis en route !`, example: `I just left the house. On my way!`, exampleTranslation: `Je viens de quitter la maison. J'arrive !` },
      { expression: `How far is it?`, translation: `C'est loin ?`, example: `How far is it to the nearest supermarket?`, exampleTranslation: `C'est loin le supermarché le plus proche ?` },
      { expression: `Take the first left.`, translation: `Prends la première à gauche.`, example: `When you leave the parking lot, take the first left.`, exampleTranslation: `En sortant du parking, prends la première à gauche.` },
      { expression: `I missed the bus.`, translation: `J'ai raté le bus.`, example: `I missed the bus by one minute! So frustrating.`, exampleTranslation: `J'ai raté le bus d'une minute ! Trop frustrant.` },
    ],
    grammar: { title: `Le futur proche avec 'going to'`, content: `Pour parler d'un plan ou d'une intention, on utilise 'going to' + verbe :

✅ I'm going to take the subway. (Je vais prendre le métro.)
✅ She's going to miss the bus. (Elle va rater le bus.)
✅ We're going to be late. (On va être en retard.)

Formation :
sujet + am/is/are + going to + verbe

Différence avec 'will' :
→ 'going to' : décision déjà prise ou évidente
  I'm going to take a cab. (C'est décidé.)
→ 'will' : décision spontanée ou promesse
  I'll take a cab then. (Décision à l'instant.)

Pour les questions :
Are you going to take the bus? (Tu vas prendre le bus ?)` },
    exercises: [
      { id: `4-t1`, type: "translation", question: `Je suis coincée dans les embouteillages. Je vais être en retard.`, answers: [`I'm stuck in traffic. I'm going to be late.`, `I'm stuck in traffic. I'll be late.`] },
      { id: `4-t2`, type: "translation", question: `Tu peux me déposer à la gare ?`, answers: [`Can you give me a ride to the station?`, `Can you drop me off at the station?`, `Can you take me to the station?`] },
      { id: `4-t3`, type: "translation", question: `Comment je fais pour aller au centre-ville ?`, answers: [`How do I get to the city center?`, `How do I get to downtown?`, `How can I get to the city center?`] },
      { id: `4-t4`, type: "translation", question: `Le bus était encore en retard ce matin.`, answers: [`The bus was late again this morning.`, `The bus was delayed again this morning.`] },
      { id: `4-t5`, type: "translation", question: `J'ai raté le dernier bus. Maintenant je dois marcher.`, answers: [`I missed the last bus. Now I have to walk.`, `I missed the last bus. I have to walk now.`] },
      { id: `4-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`to`, `going`, `I'm`, `subway`, `take`, `the`], answer: `I'm going to take the subway.` },
      { id: `4-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`corner`, `around`, `the`, `just`, `It's`], answer: `It's just around the corner.` },
      { id: `4-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`ride`, `give`, `Can`, `a`, `you`, `me`, `?`], answer: `Can you give me a ride?` },
      { id: `4-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`on`, `Are`, `the`, `going`, `bus`, `you`, `take`, `to`, `?`], answer: `Are you going to take the bus?` },
      { id: `4-f1`, type: "fill-blank", question: `Go ___ then turn left at the traffic lights.`, hint: `Tout droit`, answers: [`straight`, `straight ahead`] },
      { id: `4-f2`, type: "fill-blank", question: `I ___ the bus by one minute. So annoying!`, hint: `Rater`, answers: [`missed`] },
      { id: `4-f3`, type: "fill-blank", question: `The subway is always ___ during rush hour.`, hint: `Bondé`, answers: [`packed`, `crowded`, `jam-packed`] },
      { id: `4-f4`, type: "fill-blank", question: `I'm stuck in ___. I'll be late for the meeting.`, hint: `Embouteillages`, answers: [`traffic`] },
      { id: `4-m1`, type: "mcq", question: `Comment dit-on 'Tu vas prendre le métro ?' ?`, options: [`Are you going take the subway?`, `Are you going to take the subway?`, `Do you go to take the subway?`, `Will you going to take the subway?`], correctIndex: 1, explanation: `Are you going to + verbe → question avec 'going to'.` },
      { id: `4-m2`, type: "mcq", question: `Que signifie 'You can't miss it' ?`, options: [`Tu ne dois pas y aller.`, `Tu n'as pas pu le rater.`, `Tu ne peux pas le rater.`, `C'est trop loin.`], correctIndex: 2, explanation: `'You can't miss it' = c'est impossible de le rater (pour une direction).` },
      { id: `4-m3`, type: "mcq", question: `Comment demander la direction pour aller quelque part ?`, options: [`Where is going the museum?`, `How do I get to the museum?`, `How I go to the museum?`, `Where do I get the museum?`], correctIndex: 1, explanation: `'How do I get to...?' est la formule standard pour demander son chemin.` },
      { id: `4-m4`, type: "mcq", question: `Quelle phrase est INCORRECTE ?`, options: [`I'm going to take a cab.`, `She's going to miss the bus.`, `They are going to be late.`, `He going to drive home.`], correctIndex: 3, explanation: `Il manque 'is' : He is going to drive home.` },
      { id: `4-g1`, type: "guided", question: `Construis une phrase avec : 'going to', 'late', 'traffic'`, words: [`I'm`, `going`, `to`, `be`, `late`, `because`, `of`, `traffic`], answers: [`I'm going to be late because of traffic.`] },
      { id: `4-g2`, type: "guided", question: `Construis une phrase avec : 'drop', 'off', 'cinema'`, words: [`me`, `off`, `Can`, `you`, `drop`, `at`, `cinema`, `the`, `?`], answers: [`Can you drop me off at the cinema?`] },
      { id: `4-g3`, type: "guided", question: `Construis une phrase avec : 'blocks', 'two', 'here'`, words: [`two`, `from`, `It's`, `blocks`, `here`, `just`], answers: [`It's just two blocks from here.`] },
    ],
  },
  {
    id: 5,
    theme: `Faire les Courses`,
    vocabulary: [
      { en: `supermarket`, fr: `supermarché`, exampleEn: `I went to the supermarket yesterday.`, exampleFr: `Je suis allée au supermarché hier.` },
      { en: `aisle`, fr: `rayon / allée`, exampleEn: `The cereal is in aisle seven.`, exampleFr: `Les céréales sont dans le rayon sept.` },
      { en: `cart`, fr: `chariot (de supermarché)`, exampleEn: `I'll grab a cart. We have a lot to buy.`, exampleFr: `Je vais prendre un chariot. On a beaucoup à acheter.` },
      { en: `cashier`, fr: `caissier/caissière`, exampleEn: `The cashier was really friendly today.`, exampleFr: `La caissière était vraiment sympa aujourd'hui.` },
      { en: `receipt`, fr: `reçu / ticket de caisse`, exampleEn: `Keep your receipt in case you want to return it.`, exampleFr: `Garde ton reçu au cas où tu voulais le retourner.` },
      { en: `discount`, fr: `réduction / remise`, exampleEn: `Everything is twenty percent off. I love a good discount!`, exampleFr: `Tout est à -20%. J'adore les bonnes réductions !` },
      { en: `sale`, fr: `soldes / promotion`, exampleEn: `I only buy clothes when they're on sale.`, exampleFr: `J'achète des vêtements seulement quand ils sont en promotion.` },
      { en: `brand`, fr: `marque`, exampleEn: `I always buy the same brand of coffee.`, exampleFr: `J'achète toujours la même marque de café.` },
      { en: `organic`, fr: `bio`, exampleEn: `This organic produce is expensive but worth it.`, exampleFr: `Ces produits bio sont chers mais ça vaut le coup.` },
      { en: `expiry date`, fr: `date de péremption`, exampleEn: `Check the expiry date before buying it.`, exampleFr: `Vérifie la date de péremption avant de l'acheter.` },
      { en: `queue`, fr: `file d'attente / faire la queue`, exampleEn: `The queue at the checkout was so long.`, exampleFr: `La file d'attente à la caisse était tellement longue.` },
      { en: `run out`, fr: `être à court de / manquer de`, exampleEn: `We've run out of milk. Can you pick some up?`, exampleFr: `On n'a plus de lait. Tu peux en acheter ?` },
      { en: `bargain`, fr: `bonne affaire`, exampleEn: `This jacket was only ten euros. What a bargain!`, exampleFr: `Cette veste coûtait seulement dix euros. Quelle bonne affaire !` },
      { en: `refund`, fr: `remboursement`, exampleEn: `I'd like a refund. This product is broken.`, exampleFr: `Je voudrais un remboursement. Ce produit est cassé.` },
      { en: `fitting room`, fr: `cabine d'essayage`, exampleEn: `The fitting rooms are at the back of the store.`, exampleFr: `Les cabines d'essayage sont au fond du magasin.` },
      { en: `size`, fr: `taille`, exampleEn: `Do you have this in a smaller size?`, exampleFr: `Vous avez ça dans une taille plus petite ?` },
      { en: `cash`, fr: `espèces / liquide`, exampleEn: `Do you take cash or card only?`, exampleFr: `Vous acceptez les espèces ou carte seulement ?` },
      { en: `afford`, fr: `pouvoir se permettre`, exampleEn: `I can't afford that right now. It's too expensive.`, exampleFr: `Je ne peux pas me le permettre là. C'est trop cher.` },
      { en: `browse`, fr: `flâner / regarder sans but précis`, exampleEn: `I love browsing in bookstores on Saturdays.`, exampleFr: `J'adore flâner dans les librairies le samedi.` },
      { en: `checkout`, fr: `caisse (passage)`, exampleEn: `There's always a long wait at the checkout.`, exampleFr: `Il y a toujours une longue attente à la caisse.` },
    ],
    expressions: [
      { expression: `I'm just browsing.`, translation: `Je regarde juste.`, example: `Can I help you? — No thanks, I'm just browsing.`, exampleTranslation: `Je peux vous aider ? — Non merci, je regarde juste.` },
      { expression: `Do you have this in...?`, translation: `Vous avez ça en... ?`, example: `Do you have this in black? I love the design.`, exampleTranslation: `Vous avez ça en noir ? J'adore le design.` },
      { expression: `It's a steal!`, translation: `C'est donné ! C'est une bonne affaire !`, example: `Fifty percent off? It's a steal! I'm buying two.`, exampleTranslation: `Cinquante pour cent de réduction ? C'est donné ! J'en achète deux.` },
      { expression: `I'm on a budget.`, translation: `Je dois faire attention à mon budget.`, example: `I love this, but I'm on a budget this month.`, exampleTranslation: `J'adore ça, mais je dois faire attention à mon budget ce mois-ci.` },
      { expression: `Can I try it on?`, translation: `Je peux l'essayer ?`, example: `This dress looks nice. Can I try it on?`, exampleTranslation: `Cette robe est jolie. Je peux l'essayer ?` },
      { expression: `We're all out of...`, translation: `On n'en a plus. / Rupture de stock.`, example: `Sorry, we're all out of that model. Can I order it for you?`, exampleTranslation: `Désolé, on n'en a plus de ce modèle. Je peux vous le commander ?` },
      { expression: `I'll take it.`, translation: `Je le prends.`, example: `This is perfect. I'll take it!`, exampleTranslation: `C'est parfait. Je le prends !` },
      { expression: `Is there a sale on?`, translation: `Il y a des soldes en ce moment ?`, example: `Everything looks cheap. Is there a sale on?`, exampleTranslation: `Tout semble pas cher. Il y a des soldes en ce moment ?` },
      { expression: `That's a rip-off.`, translation: `C'est une arnaque.`, example: `Twenty dollars for a coffee? That's a rip-off!`, exampleTranslation: `Vingt dollars pour un café ? C'est une arnaque !` },
      { expression: `It's worth every penny.`, translation: `Ça vaut chaque centime.`, example: `This bag was expensive but it's worth every penny.`, exampleTranslation: `Ce sac était cher mais ça vaut chaque centime.` },
    ],
    grammar: { title: `Le Present Perfect : actions qui ont un lien avec le présent`, content: `Le Present Perfect relie le passé au présent. Il se forme avec have/has + participe passé.

Utilisation :
1. Action récente avec résultat maintenant :
✅ We've run out of milk. (On n'a plus de lait - résultat visible.)
✅ I've lost my wallet! (J'ai perdu mon portefeuille !)

2. Expérience de vie :
✅ I've never tried sushi. (Je n'ai jamais essayé les sushis.)
✅ Have you ever been to London? (Tu es déjà allé à Londres ?)

Attention : 
→ Have you ever...? (Tu as déjà... ?)
→ I've already... (J'ai déjà...)
→ I haven't yet... (Je n'ai pas encore...)` },
    exercises: [
      { id: `5-t1`, type: "translation", question: `Je suis allée au supermarché hier.`, answers: [`I went to the supermarket yesterday.`, `I went to a supermarket yesterday.`, `I went grocery shopping yesterday.`] },
      { id: `5-t2`, type: "translation", question: `On n'a plus de lait. Tu peux en acheter ?`, answers: [`We've run out of milk. Can you pick some up?`, `We're out of milk. Can you get some?`, `We ran out of milk. Can you buy some?`] },
      { id: `5-t3`, type: "translation", question: `Je ne peux pas me le permettre. C'est trop cher.`, answers: [`I can't afford it. It's too expensive.`, `I can't afford that. It's too expensive.`] },
      { id: `5-t4`, type: "translation", question: `Vous avez ça dans une taille plus petite ?`, answers: [`Do you have this in a smaller size?`, `Do you have this in a smaller size, please?`, `Have you got this in a smaller size?`] },
      { id: `5-t5`, type: "translation", question: `Cette veste coûtait dix euros. Quelle bonne affaire !`, answers: [`This jacket was only ten euros. What a bargain!`, `This jacket was ten euros. What a bargain!`, `That jacket was only ten euros — what a steal!`] },
      { id: `5-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`run`, `milk`, `We've`, `of`, `out`], answer: `We've run out of milk.` },
      { id: `5-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`it`, `Can`, `try`, `I`, `on`, `?`], answer: `Can I try it on?` },
      { id: `5-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`I'll`, `it`, `take`, `!`], answer: `I'll take it!` },
      { id: `5-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`afford`, `I`, `can't`, `right`, `it`, `now`], answer: `I can't afford it right now.` },
      { id: `5-f1`, type: "fill-blank", question: `I'm just ___ . I don't need anything specific.`, hint: `Regarder sans but précis`, answers: [`browsing`, `looking around`] },
      { id: `5-f2`, type: "fill-blank", question: `Everything is on ___. I need to buy everything now!`, hint: `Soldes`, answers: [`sale`] },
      { id: `5-f3`, type: "fill-blank", question: `Keep your ___ in case you want to return it.`, hint: `Ticket de caisse`, answers: [`receipt`] },
      { id: `5-f4`, type: "fill-blank", question: `This is a total ___. Twenty euros for a sandwich!`, hint: `Arnaque`, answers: [`rip-off`, `ripoff`, `scam`] },
      { id: `5-m1`, type: "mcq", question: `Que signifie 'I'm on a budget' ?`, options: [`Je suis riche.`, `Je fais attention à mon argent.`, `Je suis économiste.`, `J'ai un budget illimité.`], correctIndex: 1, explanation: `'On a budget' = avec un budget limité, faire attention à ses dépenses.` },
      { id: `5-m2`, type: "mcq", question: `Comment dit-on 'Vous avez ça en rouge ?' ?`, options: [`Have you this in red?`, `Do you have this in red?`, `Have you got red color?`, `You have this red?`], correctIndex: 1, explanation: `'Do you have this in...?' est la formule standard.` },
      { id: `5-m3`, type: "mcq", question: `Que veut dire 'It's a steal!' ?`, options: [`Quelqu'un a volé quelque chose.`, `C'est une bonne affaire.`, `C'est cher.`, `C'est volé.`], correctIndex: 1, explanation: `'It's a steal!' = c'est donné / c'est une bonne affaire (expression idiomatique).` },
      { id: `5-m4`, type: "mcq", question: `Le Present Perfect se forme avec :`, options: [`do/does + verbe`, `have/has + infinitif`, `have/has + participe passé`, `did + participe passé`], correctIndex: 2, explanation: `Present Perfect = have/has + participe passé (ex: I've bought, she has run out).` },
      { id: `5-g1`, type: "guided", question: `Construis une phrase avec : 'never', 'tried', 'sushi'`, words: [`I've`, `never`, `tried`, `sushi`, `before`], answers: [`I've never tried sushi before.`, `I've never tried sushi.`] },
      { id: `5-g2`, type: "guided", question: `Construis une phrase avec : 'worth', 'every', 'penny'`, words: [`worth`, `It's`, `every`, `penny`], answers: [`It's worth every penny.`] },
      { id: `5-g3`, type: "guided", question: `Construis une phrase avec : 'have', 'ever', 'London'`, words: [`Have`, `you`, `ever`, `been`, `to`, `London`, `?`], answers: [`Have you ever been to London?`] },
    ],
  },
  {
    id: 6,
    theme: `Maison & Famille`,
    vocabulary: [
      { en: `apartment`, fr: `appartement`, exampleEn: `I rent a small apartment in the city center.`, exampleFr: `Je loue un petit appartement en centre-ville.` },
      { en: `roommate`, fr: `colocataire`, exampleEn: `My roommate is really clean and quiet.`, exampleFr: `Mon coloc est vraiment propre et calme.` },
      { en: `landlord`, fr: `propriétaire (bailleur)`, exampleEn: `My landlord just raised the rent again.`, exampleFr: `Mon propriétaire vient d'encore augmenter le loyer.` },
      { en: `rent`, fr: `loyer / louer`, exampleEn: `The rent is way too high in this neighborhood.`, exampleFr: `Le loyer est beaucoup trop élevé dans ce quartier.` },
      { en: `neighborhood`, fr: `quartier`, exampleEn: `This neighborhood is super quiet at night.`, exampleFr: `Ce quartier est super calme la nuit.` },
      { en: `cozy`, fr: `douillet / confortable`, exampleEn: `I love how cozy my apartment feels in winter.`, exampleFr: `J'adore l'ambiance douillette de mon appartement en hiver.` },
      { en: `messy`, fr: `en désordre`, exampleEn: `Sorry about the mess. I haven't had time to clean.`, exampleFr: `Désolée pour le désordre. Je n'ai pas eu le temps de ranger.` },
      { en: `tidy up`, fr: `ranger / faire le ménage`, exampleEn: `I need to tidy up before my guests arrive.`, exampleFr: `Je dois ranger avant que mes invités arrivent.` },
      { en: `siblings`, fr: `frères et sœurs`, exampleEn: `I have two siblings: an older brother and a younger sister.`, exampleFr: `J'ai deux frères et sœurs : un grand frère et une petite sœur.` },
      { en: `raise`, fr: `élever (un enfant)`, exampleEn: `I was raised in a small town in the south.`, exampleFr: `J'ai grandi dans une petite ville dans le sud.` },
      { en: `close-knit`, fr: `soudé(e) / uni(e) (famille)`, exampleEn: `We're a very close-knit family. We talk every day.`, exampleFr: `Nous sommes une famille très soudée. On se parle tous les jours.` },
      { en: `move in`, fr: `emménager`, exampleEn: `We moved in last September. I love the space.`, exampleFr: `On a emménagé en septembre dernier. J'adore l'espace.` },
      { en: `move out`, fr: `déménager / partir`, exampleEn: `My old roommate moved out and now I live alone.`, exampleFr: `Mon ancien coloc est parti et maintenant je vis seule.` },
      { en: `basement`, fr: `sous-sol`, exampleEn: `The laundry room is in the basement.`, exampleFr: `La salle de lavage est au sous-sol.` },
      { en: `balcony`, fr: `balcon`, exampleEn: `I drink my morning coffee on the balcony.`, exampleFr: `Je bois mon café du matin sur le balcon.` },
      { en: `household`, fr: `ménage / foyer`, exampleEn: `We share household tasks equally.`, exampleFr: `On partage les tâches ménagères de façon égale.` },
      { en: `mortgage`, fr: `crédit immobilier / prêt`, exampleEn: `They just got a mortgage and bought their first house.`, exampleFr: `Ils viennent d'obtenir un crédit et ont acheté leur première maison.` },
      { en: `spare room`, fr: `chambre d'amis`, exampleEn: `You can stay in the spare room this weekend.`, exampleFr: `Tu peux dormir dans la chambre d'amis ce week-end.` },
      { en: `clutter`, fr: `désordre / bazar`, exampleEn: `I'm trying to declutter my apartment this weekend.`, exampleFr: `J'essaie de désencombrer mon appartement ce week-end.` },
      { en: `fix up`, fr: `rénover / réparer`, exampleEn: `They're fixing up the old house on the corner.`, exampleFr: `Ils rénovent la vieille maison au coin de la rue.` },
    ],
    expressions: [
      { expression: `Make yourself at home!`, translation: `Fais comme chez toi !`, example: `Come in! Make yourself at home. Can I get you something to drink?`, exampleTranslation: `Entre ! Fais comme chez toi. Je t'apporte quelque chose à boire ?` },
      { expression: `Home sweet home.`, translation: `Rien de tel que chez soi.`, example: `After that long trip, home sweet home!`, exampleTranslation: `Après ce long voyage, rien de tel que chez soi !` },
      { expression: `I'm home!`, translation: `Je suis rentré(e) !`, example: `I'm home! Something smells amazing!`, exampleTranslation: `Je suis rentrée ! Ça sent bon !` },
      { expression: `We get along really well.`, translation: `On s'entend très bien.`, example: `My roommate and I get along really well. It's great.`, exampleTranslation: `Mon coloc et moi on s'entend très bien. C'est super.` },
      { expression: `We drove each other crazy.`, translation: `On se rendait mutuellement fou/folle.`, example: `By the end, my old roommate and I drove each other crazy.`, exampleTranslation: `À la fin, mon ancien coloc et moi on se rendait fous.` },
      { expression: `The place is a mess.`, translation: `C'est le bazar ici.`, example: `I haven't cleaned in weeks. The place is a complete mess.`, exampleTranslation: `Je n'ai pas nettoyé depuis des semaines. C'est le bazar total ici.` },
      { expression: `I grew up in...`, translation: `J'ai grandi à/en...`, example: `I grew up in a small village. It was very peaceful.`, exampleTranslation: `J'ai grandi dans un petit village. C'était très paisible.` },
      { expression: `My door is always open.`, translation: `Ma porte est toujours ouverte.`, example: `If you ever need to talk, my door is always open.`, exampleTranslation: `Si tu as besoin de parler, ma porte est toujours ouverte.` },
      { expression: `We're renting for now.`, translation: `On loue pour l'instant.`, example: `We'd love to buy, but we're renting for now.`, exampleTranslation: `On adorait acheter, mais on loue pour l'instant.` },
      { expression: `It feels like home.`, translation: `On se sent comme chez soi.`, example: `I've only been here a month but it already feels like home.`, exampleTranslation: `Je suis ici depuis seulement un mois mais je me sens déjà comme chez moi.` },
    ],
    grammar: { title: `Le passé avec 'used to' : parler de ce qu'on faisait avant`, content: `'Used to' permet de parler d'habitudes ou de situations passées qui n'existent plus.

✅ I used to live with my parents. (J'habitais chez mes parents avant.)
✅ She used to have a big apartment. (Elle avait un grand appartement avant.)

Formation :
sujet + used to + verbe de base

Négatif : I didn't use to... (je ne... pas avant)
✅ I didn't use to like cleaning. (Je n'aimais pas faire le ménage avant.)

Question : Did you use to...?
✅ Did you use to share a room with your sibling?

Différence :
→ used to = habitude passée (terminée)
→ usually = habitude actuelle
  I usually clean on Sundays. (maintenant)` },
    exercises: [
      { id: `6-t1`, type: "translation", question: `J'habite dans un petit appartement en centre-ville.`, answers: [`I live in a small apartment in the city center.`, `I live in a small flat in the city center.`, `I rent a small apartment downtown.`] },
      { id: `6-t2`, type: "translation", question: `Mon coloc et moi on s'entend très bien.`, answers: [`My roommate and I get along really well.`, `Me and my roommate get along really well.`, `My flatmate and I get along great.`] },
      { id: `6-t3`, type: "translation", question: `Fais comme chez toi ! Je t'apporte quelque chose à boire.`, answers: [`Make yourself at home! Can I get you something to drink?`, `Make yourself at home! I'll get you something to drink.`] },
      { id: `6-t4`, type: "translation", question: `J'ai grandi dans une petite ville dans le sud.`, answers: [`I grew up in a small town in the south.`, `I was raised in a small town in the south.`, `I grew up in a small city in the south.`] },
      { id: `6-t5`, type: "translation", question: `J'ai besoin de ranger avant que mes invités arrivent.`, answers: [`I need to tidy up before my guests arrive.`, `I need to clean up before my guests arrive.`, `I have to tidy up before my guests arrive.`] },
      { id: `6-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`used`, `live`, `I`, `parents`, `to`, `with`, `my`], answer: `I used to live with my parents.` },
      { id: `6-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`home`, `Make`, `yourself`, `at`, `!`], answer: `Make yourself at home!` },
      { id: `6-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`really`, `well`, `along`, `get`, `We`], answer: `We get along really well.` },
      { id: `6-w4`, type: "word-order", question: `Remets les l'ordre.`, words: [`to`, `use`, `Did`, `room`, `share`, `a`, `you`, `sibling`, `with`, `your`, `?`], answer: `Did you use to share a room with your sibling?` },
      { id: `6-f1`, type: "fill-blank", question: `I love how ___ my apartment feels in winter.`, hint: `Douillet`, answers: [`cozy`] },
      { id: `6-f2`, type: "fill-blank", question: `My old roommate ___ out last month. Now I live alone.`, hint: `Partir (déménager)`, answers: [`moved`] },
      { id: `6-f3`, type: "fill-blank", question: `Sorry, the place is a ___. I haven't cleaned in weeks.`, hint: `Désordre / bazar`, answers: [`mess`] },
      { id: `6-f4`, type: "fill-blank", question: `I ___ to hate cooking. Now I actually enjoy it!`, hint: `Avant, je détestais...`, answers: [`used`] },
      { id: `6-m1`, type: "mcq", question: `'I used to live alone' signifie :`, options: [`Je vis seul maintenant.`, `J'avais l'habitude de vivre seul avant.`, `Je vis souvent seul.`, `J'utilise ma maison seul.`], correctIndex: 1, explanation: `'Used to' parle d'une habitude PASSÉE qui n'existe plus maintenant.` },
      { id: `6-m2`, type: "mcq", question: `Comment forme-t-on la négation de 'used to' ?`, options: [`I used to not...`, `I didn't used to...`, `I didn't use to...`, `I don't used to...`], correctIndex: 2, explanation: `Négatif : I didn't use to (sans 'd' à use car 'did' porte le passé).` },
      { id: `6-m3`, type: "mcq", question: `Que signifie 'My door is always open' dans ce contexte ?`, options: [`Ma porte est littéralement ouverte.`, `Je suis toujours disponible pour aider.`, `Je ne ferme jamais ma porte.`, `Je vis sans porte.`], correctIndex: 1, explanation: `'My door is always open' = je suis disponible / à l'écoute.` },
      { id: `6-m4`, type: "mcq", question: `Que veut dire 'close-knit family' ?`, options: [`Famille nombreuse`, `Famille riche`, `Famille soudée / unie`, `Famille proche géographiquement`], correctIndex: 2, explanation: `'Close-knit' décrit une famille très unie et soudée émotionnellement.` },
      { id: `6-g1`, type: "guided", question: `Construis une phrase avec : 'used to', 'share', 'room'`, words: [`used`, `to`, `I`, `a`, `share`, `room`, `sister`, `with`, `my`], answers: [`I used to share a room with my sister.`] },
      { id: `6-g2`, type: "guided", question: `Construis une phrase avec : 'grew up', 'small', 'village'`, words: [`grew`, `up`, `I`, `a`, `in`, `small`, `village`], answers: [`I grew up in a small village.`] },
      { id: `6-g3`, type: "guided", question: `Construis une phrase avec : 'feel', 'home', 'already'`, words: [`feels`, `It`, `like`, `home`, `already`], answers: [`It feels like home already.`, `It already feels like home.`] },
    ],
  },
  {
    id: 7,
    theme: `Amis & Vie Sociale`,
    vocabulary: [
      { en: `hang out`, fr: `traîner / passer du temps avec`, exampleEn: `We used to hang out every weekend.`, exampleFr: `On traînait ensemble tous les week-ends avant.` },
      { en: `catch up`, fr: `se retrouver / rattraper le temps perdu`, exampleEn: `We should catch up soon. It's been ages!`, exampleFr: `On devrait se retrouver bientôt. Ça fait une éternité !` },
      { en: `plan`, fr: `plan / avoir prévu`, exampleEn: `I have no plans this weekend. Want to do something?`, exampleFr: `Je n'ai rien de prévu ce week-end. Tu veux faire quelque chose ?` },
      { en: `invite`, fr: `inviter`, exampleEn: `She invited everyone except me. That hurt.`, exampleFr: `Elle a invité tout le monde sauf moi. Ça fait mal.` },
      { en: `cancel`, fr: `annuler`, exampleEn: `He cancelled last minute again. So annoying.`, exampleFr: `Il a annulé au dernier moment encore une fois. Trop chiant.` },
      { en: `blow off`, fr: `poser un lapin / laisser tomber`, exampleEn: `She blew me off three times this month.`, exampleFr: `Elle m'a posé un lapin trois fois ce mois-ci.` },
      { en: `reliable`, fr: `fiable / sur qui on peut compter`, exampleEn: `She's the most reliable person I know.`, exampleFr: `C'est la personne la plus fiable que je connaisse.` },
      { en: `gossip`, fr: `ragots / cancaner`, exampleEn: `I hate gossip, but I love a good story.`, exampleFr: `Je déteste les ragots, mais j'adore une bonne histoire.` },
      { en: `drama`, fr: `drama / drama (informel)`, exampleEn: `There's always so much drama in that friend group.`, exampleFr: `Il y a toujours autant de drama dans ce groupe d'amis.` },
      { en: `support`, fr: `soutien / soutenir`, exampleEn: `She's been so supportive during my hard times.`, exampleFr: `Elle a été tellement là pour moi pendant mes moments difficiles.` },
      { en: `trust`, fr: `confiance / faire confiance`, exampleEn: `I trust him with everything. He's never let me down.`, exampleFr: `J'ai confiance en lui pour tout. Il ne m'a jamais déçu.` },
      { en: `argue`, fr: `se disputer`, exampleEn: `We argued about something stupid and didn't talk for a week.`, exampleFr: `On s'est disputés pour quelque chose de bête et on ne s'est pas parlé pendant une semaine.` },
      { en: `make up`, fr: `se réconcilier`, exampleEn: `We argued but made up the next day.`, exampleFr: `On s'est disputés mais on s'est réconciliés le lendemain.` },
      { en: `outgoing`, fr: `sociable / extraverti(e)`, exampleEn: `She's super outgoing. She makes friends everywhere she goes.`, exampleFr: `Elle est super sociable. Elle se fait des amis partout où elle va.` },
      { en: `awkward`, fr: `gênant / mal à l'aise`, exampleEn: `It was so awkward seeing my ex at the party.`, exampleFr: `C'était tellement gênant de voir mon ex à la fête.` },
      { en: `vibe`, fr: `ambiance / bonne énergie`, exampleEn: `The vibe at this party is amazing.`, exampleFr: `L'ambiance à cette fête est incroyable.` },
      { en: `crowd`, fr: `foule / monde`, exampleEn: `I don't like big crowds. I prefer small gatherings.`, exampleFr: `Je n'aime pas les grandes foules. Je préfère les petits rassemblements.` },
      { en: `ditch`, fr: `laisser tomber / fausser compagnie`, exampleEn: `He ditched us to go to another party. Rude!`, exampleFr: `Il nous a laissé tomber pour aller à une autre fête. Grossier !` },
      { en: `miss`, fr: `manquer`, exampleEn: `I really miss my old friends from college.`, exampleFr: `Mes vieux amis de la fac me manquent vraiment.` },
      { en: `bond`, fr: `lien / créer un lien`, exampleEn: `We bonded over our love of the same TV show.`, exampleFr: `On a créé un lien grâce à notre amour pour la même série.` },
    ],
    expressions: [
      { expression: `What are you up to?`, translation: `Tu fais quoi ? / Tu es libre ?`, example: `Hey! What are you up to this weekend?`, exampleTranslation: `Hey ! Tu fais quoi ce week-end ?` },
      { expression: `We should hang out sometime.`, translation: `On devrait se voir un de ces quatre.`, example: `It was great talking to you! We should hang out sometime.`, exampleTranslation: `C'était super de te parler ! On devrait se voir un de ces quatre.` },
      { expression: `Long time no see!`, translation: `Ça fait longtemps !`, example: `Oh my god, long time no see! How have you been?`, exampleTranslation: `Oh mon dieu, ça fait longtemps ! Comment tu vas ?` },
      { expression: `We lost touch.`, translation: `On a perdu contact.`, example: `We were best friends but we lost touch after university.`, exampleTranslation: `On était meilleures amies mais on a perdu contact après l'université.` },
      { expression: `I've got your back.`, translation: `Je suis là pour toi. / Je te couvre.`, example: `Don't worry about it. I've got your back.`, exampleTranslation: `Ne t'inquiète pas. Je suis là pour toi.` },
      { expression: `She's a keeper.`, translation: `C'est quelqu'un à garder dans sa vie.`, example: `She helped me move AND brought food. She's a keeper!`, exampleTranslation: `Elle m'a aidée à déménager ET a apporté à manger. C'est quelqu'un à garder !` },
      { expression: `We're on the same wavelength.`, translation: `On est sur la même longueur d'onde.`, example: `I love talking to her. We're totally on the same wavelength.`, exampleTranslation: `J'adore parler avec elle. On est totalement sur la même longueur d'onde.` },
      { expression: `He stood me up.`, translation: `Il m'a posé un lapin.`, example: `I waited an hour and he stood me up. Never again.`, exampleTranslation: `J'ai attendu une heure et il m'a posé un lapin. Plus jamais.` },
      { expression: `The more the merrier!`, translation: `Plus on est de fous, plus on rit !`, example: `Can I bring a friend? — Of course! The more the merrier!`, exampleTranslation: `Je peux amener un ami ? — Bien sûr ! Plus on est de fous, plus on rit !` },
      { expression: `It's not you, it's me.`, translation: `C'est pas toi, c'est moi.`, example: `Everyone uses that classic line: 'It's not you, it's me.'`, exampleTranslation: `Tout le monde utilise cette réplique classique : 'C'est pas toi, c'est moi.'` },
    ],
    grammar: { title: `Le passé simple (Simple Past) : actions terminées`, content: `Pour parler d'actions terminées dans le passé, on utilise le Simple Past.

Formation :
• Verbes réguliers : verbe + -ed
  I called, she waited, we talked

• Verbes irréguliers (à mémoriser) :
  go → went, see → saw, have → had, say → said, make → made

✅ We argued about something stupid.
✅ She invited everyone.
✅ I waited for an hour.

Négatif : didn't + verbe de base
✅ He didn't call me back.

Question : Did + sujet + verbe ?
✅ Did you have fun at the party?

Mot clé : yesterday, last night, ago, in 2020` },
    exercises: [
      { id: `7-t1`, type: "translation", question: `On s'est disputés mais on s'est réconciliés le lendemain.`, answers: [`We argued but made up the next day.`, `We had an argument but made up the next day.`, `We argued but we made up the next day.`] },
      { id: `7-t2`, type: "translation", question: `J'ai attendu une heure et il m'a posé un lapin.`, answers: [`I waited an hour and he stood me up.`, `I waited for an hour and he stood me up.`, `He stood me up after I waited for an hour.`] },
      { id: `7-t3`, type: "translation", question: `Tu fais quoi ce week-end ?`, answers: [`What are you up to this weekend?`, `What are you doing this weekend?`, `What do you have planned this weekend?`] },
      { id: `7-t4`, type: "translation", question: `On était meilleures amies mais on a perdu contact.`, answers: [`We were best friends but we lost touch.`, `We used to be best friends but we lost touch.`, `We were best friends but lost touch.`] },
      { id: `7-t5`, type: "translation", question: `L'ambiance à cette fête est incroyable !`, answers: [`The vibe at this party is amazing!`, `The atmosphere at this party is amazing!`, `The vibe here is incredible!`] },
      { id: `7-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`have`, `you`, `been`, `How`, `?`], answer: `How have you been?` },
      { id: `7-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`your`, `I've`, `got`, `back`], answer: `I've got your back.` },
      { id: `7-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`touch`, `after`, `lost`, `We`, `university`], answer: `We lost touch after university.` },
      { id: `7-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`you`, `Did`, `fun`, `party`, `at`, `have`, `the`, `?`], answer: `Did you have fun at the party?` },
      { id: `7-f1`, type: "fill-blank", question: `She ___ me off again. I'm done with her!`, hint: `Poser un lapin / laisser tomber`, answers: [`blew`, `stood`] },
      { id: `7-f2`, type: "fill-blank", question: `We ___ over our love of the same show. That's how we became friends.`, hint: `Créer un lien`, answers: [`bonded`] },
      { id: `7-f3`, type: "fill-blank", question: `It was so ___ seeing my ex at the party.`, hint: `Gênant / inconfortable`, answers: [`awkward`, `uncomfortable`, `weird`] },
      { id: `7-f4`, type: "fill-blank", question: `Can I bring a friend? — The more the ___!`, hint: `Expression : plus on est de fous...`, answers: [`merrier`] },
      { id: `7-m1`, type: "mcq", question: `Comment dit-on 'Il ne m'a pas rappelée' au passé ?`, options: [`He didn't called me back.`, `He doesn't call me back.`, `He didn't call me back.`, `He not called me back.`], correctIndex: 2, explanation: `Négatif au passé : didn't + verbe de BASE (sans -ed).` },
      { id: `7-m2`, type: "mcq", question: `Que signifie 'She's a keeper' ?`, options: [`Elle garde tout.`, `Elle est gardienne de but.`, `C'est quelqu'un à garder dans sa vie.`, `Elle est possessive.`], correctIndex: 2, explanation: `'She's a keeper' = c'est quelqu'un de précieux, à garder dans sa vie.` },
      { id: `7-m3`, type: "mcq", question: `Quel est le passé de 'go' ?`, options: [`goed`, `gone`, `went`, `go`], correctIndex: 2, explanation: `Go est un verbe irrégulier : go → went (passé simple), gone (participe passé).` },
      { id: `7-m4`, type: "mcq", question: `Que signifie 'What are you up to?' ?`, options: [`Tu es debout ?`, `Tu fais quoi en ce moment ?`, `Tu es de taille ?`, `Tu es disponible ?`], correctIndex: 1, explanation: `'What are you up to?' = qu'est-ce que tu fais ? / tu es dispo ?` },
      { id: `7-g1`, type: "guided", question: `Construis une phrase avec : 'hang out', 'weekend', 'sometime'`, words: [`hang`, `out`, `We`, `should`, `this`, `weekend`, `sometime`], answers: [`We should hang out this weekend.`, `We should hang out sometime this weekend.`] },
      { id: `7-g2`, type: "guided", question: `Construis une phrase avec : 'miss', 'friends', 'college'`, words: [`really`, `miss`, `I`, `my`, `friends`, `from`, `college`], answers: [`I really miss my friends from college.`] },
      { id: `7-g3`, type: "guided", question: `Construis une phrase avec : 'same', 'wavelength', 'totally'`, words: [`We're`, `on`, `totally`, `same`, `the`, `wavelength`], answers: [`We're totally on the same wavelength.`] },
    ],
  },
  {
    id: 8,
    theme: `Loisirs & Hobbies`,
    vocabulary: [
      { en: `binge-watch`, fr: `regarder en rafale`, exampleEn: `I binge-watched the whole season in one night.`, exampleFr: `J'ai regardé toute la saison en une nuit.` },
      { en: `stream`, fr: `diffuser en streaming`, exampleEn: `What are you streaming these days?`, exampleFr: `Tu regardes quoi en streaming en ce moment ?` },
      { en: `workout`, fr: `entraînement / s'entraîner`, exampleEn: `I try to work out at least three times a week.`, exampleFr: `J'essaie de m'entraîner au moins trois fois par semaine.` },
      { en: `sketch`, fr: `croquis / dessiner`, exampleEn: `She sketches portraits in her free time.`, exampleFr: `Elle fait des croquis de portraits pendant son temps libre.` },
      { en: `knit`, fr: `tricoter`, exampleEn: `My grandma taught me how to knit.`, exampleFr: `Ma grand-mère m'a appris à tricoter.` },
      { en: `hike`, fr: `randonnée / randonner`, exampleEn: `We went on a hike last Sunday. The views were stunning.`, exampleFr: `On a fait une randonnée dimanche dernier. Les vues étaient magnifiques.` },
      { en: `board game`, fr: `jeu de société`, exampleEn: `We play board games every Friday night.`, exampleFr: `On joue aux jeux de société tous les vendredis soir.` },
      { en: `collect`, fr: `collectionner`, exampleEn: `He collects vintage posters. He has hundreds.`, exampleFr: `Il collectionne les affiches vintage. Il en a des centaines.` },
      { en: `playlist`, fr: `playlist`, exampleEn: `I made a playlist for our road trip.`, exampleFr: `J'ai fait une playlist pour notre road trip.` },
      { en: `photography`, fr: `photographie`, exampleEn: `I got into photography during lockdown.`, exampleFr: `Je me suis mise à la photo pendant le confinement.` },
      { en: `nerd out`, fr: `se passionner / s'emballer sur quelque chose`, exampleEn: `I could nerd out about this show for hours.`, exampleFr: `Je pourrais parler de cette série pendant des heures.` },
      { en: `DIY`, fr: `faire soi-même / bricolage`, exampleEn: `I love DIY projects. I renovated my whole bedroom.`, exampleFr: `J'adore les projets DIY. J'ai rénové toute ma chambre.` },
      { en: `unwind`, fr: `décompresser / se détendre`, exampleEn: `Reading is how I unwind after a long day.`, exampleFr: `La lecture est ma façon de décompresser après une longue journée.` },
      { en: `obsessed`, fr: `obsédé(e)`, exampleEn: `I'm completely obsessed with this podcast.`, exampleFr: `Je suis complètement obsédée par ce podcast.` },
      { en: `passion`, fr: `passion`, exampleEn: `Music has always been my biggest passion.`, exampleFr: `La musique a toujours été ma plus grande passion.` },
      { en: `pick up`, fr: `se mettre à (une activité)`, exampleEn: `I picked up guitar during the pandemic.`, exampleFr: `Je me suis mise à la guitare pendant la pandémie.` },
      { en: `talent`, fr: `talent / don`, exampleEn: `She has a real talent for painting.`, exampleFr: `Elle a un vrai talent pour la peinture.` },
      { en: `relax`, fr: `se relaxer`, exampleEn: `I just want to stay in and relax this weekend.`, exampleFr: `Je veux juste rester à la maison et me détendre ce week-end.` },
      { en: `distraction`, fr: `distraction / passe-temps`, exampleEn: `I need a distraction. Let's watch a movie.`, exampleFr: `J'ai besoin de me changer les idées. On regarde un film ?` },
      { en: `guilty pleasure`, fr: `plaisir coupable`, exampleEn: `My guilty pleasure is reality TV shows.`, exampleFr: `Mon plaisir coupable c'est les télé-réalités.` },
    ],
    expressions: [
      { expression: `I'm into...`, translation: `Je suis fan de... / Je suis dans...`, example: `I'm really into true crime podcasts right now.`, exampleTranslation: `Je suis vraiment fan des podcasts true crime en ce moment.` },
      { expression: `I can't get enough of it.`, translation: `J'en ai jamais assez. / J'adore trop ça.`, example: `This show is so good. I can't get enough of it!`, exampleTranslation: `Cette série est trop bien. J'en ai jamais assez !` },
      { expression: `It's my guilty pleasure.`, translation: `C'est mon plaisir coupable.`, example: `I know it's trash TV, but it's my guilty pleasure.`, exampleTranslation: `Je sais que c'est de la télé poubelle, mais c'est mon plaisir coupable.` },
      { expression: `I got into it during lockdown.`, translation: `J'ai commencé pendant le confinement.`, example: `I got into baking during lockdown and never stopped.`, exampleTranslation: `J'ai commencé la pâtisserie pendant le confinement et je n'ai jamais arrêté.` },
      { expression: `I could do this all day.`, translation: `Je pourrais faire ça toute la journée.`, example: `I love hiking. I could do this all day.`, exampleTranslation: `J'adore la randonnée. Je pourrais faire ça toute la journée.` },
      { expression: `That's right up my alley.`, translation: `C'est exactement mon truc.`, example: `A cooking class? That's right up my alley!`, exampleTranslation: `Un cours de cuisine ? C'est exactement mon truc !` },
      { expression: `I've been meaning to try...`, translation: `J'ai toujours voulu essayer...`, example: `I've been meaning to try yoga for ages.`, exampleTranslation: `J'ai toujours voulu essayer le yoga depuis longtemps.` },
      { expression: `What do you do in your free time?`, translation: `Tu fais quoi pendant ton temps libre ?`, example: `What do you do in your free time? Any cool hobbies?`, exampleTranslation: `Tu fais quoi pendant ton temps libre ? Des hobbies cool ?` },
      { expression: `I'm not really into it.`, translation: `C'est pas trop mon truc.`, example: `I tried gaming but I'm not really into it.`, exampleTranslation: `J'ai essayé les jeux vidéo mais c'est pas trop mon truc.` },
      { expression: `It helps me switch off.`, translation: `Ça m'aide à déconnecter.`, example: `Painting really helps me switch off after work.`, exampleTranslation: `La peinture m'aide vraiment à déconnecter après le travail.` },
    ],
    grammar: { title: `Exprimer le goût avec like, love, enjoy, hate + -ing`, content: `En anglais, après like/love/enjoy/hate, on met le verbe en -ing :

✅ I love watching Netflix. (J'adore regarder Netflix.)
✅ She enjoys hiking on weekends. (Elle aime randonner le week-end.)
✅ He hates cleaning. (Il déteste faire le ménage.)
✅ I don't mind cooking. (Cuisiner ne me dérange pas.)

Attention : 'enjoy' veut TOUJOURS le -ing !
✅ I enjoy reading. ❌ I enjoy to read. (faux)

Mais après 'would like', on utilise 'to' + verbe :
✅ I would like to try yoga. (J'aimerais essayer le yoga.)

Autres expressions utiles :
→ be into + -ing : I'm into hiking.
→ can't stand + -ing : I can't stand waiting.` },
    exercises: [
      { id: `8-t1`, type: "translation", question: `J'ai regardé toute la saison en une nuit.`, answers: [`I binge-watched the whole season in one night.`, `I watched the whole season in one night.`, `I finished the whole season in one night.`] },
      { id: `8-t2`, type: "translation", question: `Je me suis mise à la guitare pendant la pandémie.`, answers: [`I picked up guitar during the pandemic.`, `I started playing guitar during the pandemic.`, `I took up guitar during the pandemic.`] },
      { id: `8-t3`, type: "translation", question: `Mon plaisir coupable c'est les télé-réalités.`, answers: [`My guilty pleasure is reality TV shows.`, `My guilty pleasure is reality TV.`, `Reality TV is my guilty pleasure.`] },
      { id: `8-t4`, type: "translation", question: `Tu fais quoi pendant ton temps libre ?`, answers: [`What do you do in your free time?`, `What do you do in your spare time?`, `What are you into in your free time?`] },
      { id: `8-t5`, type: "translation", question: `La lecture est ma façon de décompresser après une longue journée.`, answers: [`Reading is how I unwind after a long day.`, `Reading helps me unwind after a long day.`, `I unwind by reading after a long day.`] },
      { id: `8-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`really`, `into`, `I'm`, `podcasts`, `true`, `crime`], answer: `I'm really into true crime podcasts.` },
      { id: `8-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`enjoy`, `do`, `you`, `What`, `in`, `time`, `free`, `your`, `?`], answer: `What do you enjoy in your free time?` },
      { id: `8-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`off`, `switch`, `me`, `It`, `helps`], answer: `It helps me switch off.` },
      { id: `8-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`can't`, `I`, `enough`, `get`, `of`, `it`], answer: `I can't get enough of it.` },
      { id: `8-f1`, type: "fill-blank", question: `I love ___ Netflix in the evening. It helps me relax.`, hint: `Regarder (-ing)`, answers: [`watching`, `binge-watching`] },
      { id: `8-f2`, type: "fill-blank", question: `She's completely ___ with that podcast. She talks about it non-stop.`, hint: `Obsédée`, answers: [`obsessed`] },
      { id: `8-f3`, type: "fill-blank", question: `I've been ___ to try yoga for ages.`, hint: `Avoir toujours voulu...`, answers: [`meaning`, `wanting`, `trying`] },
      { id: `8-f4`, type: "fill-blank", question: `A horror movie? That's right up my ___!`, hint: `C'est mon truc !`, answers: [`alley`] },
      { id: `8-m1`, type: "mcq", question: `Laquelle de ces phrases est correcte ?`, options: [`I enjoy to paint.`, `I enjoy painting.`, `I enjoy paint.`, `I enjoying painting.`], correctIndex: 1, explanation: `Après 'enjoy', on utilise TOUJOURS le -ing : I enjoy painting.` },
      { id: `8-m2`, type: "mcq", question: `Que signifie 'I'm into true crime' ?`, options: [`Je suis contre les vrais crimes.`, `Je suis fan de true crime.`, `Je fais de vrais crimes.`, `J'ai vraiment peur des crimes.`], correctIndex: 1, explanation: `'I'm into...' = j'aime / je suis fan de...` },
      { id: `8-m3`, type: "mcq", question: `Comment dit-on 'J'aimerais essayer le yoga' ?`, options: [`I like to try yoga.`, `I would like trying yoga.`, `I would like to try yoga.`, `I like trying yoga.`], correctIndex: 2, explanation: `Would like + to + verbe de base : I would like to try yoga.` },
      { id: `8-m4`, type: "mcq", question: `Que veut dire 'guilty pleasure' ?`, options: [`Culpabilité coupable`, `Plaisir coupable`, `Plaisir innocent`, `Bonne action`, ``], correctIndex: 1, explanation: `'Guilty pleasure' = quelque chose qu'on aime mais dont on est un peu honteux(se).` },
      { id: `8-g1`, type: "guided", question: `Construis une phrase avec : 'love', 'hiking', 'all day'`, words: [`hiking`, `love`, `I`, `could`, `do`, `all`, `this`, `day`, `I`], answers: [`I love hiking. I could do this all day.`] },
      { id: `8-g2`, type: "guided", question: `Construis une phrase avec : 'can't', 'stand', 'waiting'`, words: [`can't`, `I`, `stand`, `waiting`], answers: [`I can't stand waiting.`] },
      { id: `8-g3`, type: "guided", question: `Construis une phrase avec : 'picked up', 'photography', 'lockdown'`, words: [`picked`, `up`, `I`, `photography`, `during`, `lockdown`], answers: [`I picked up photography during lockdown.`] },
    ],
  },
  {
    id: 9,
    theme: `Santé & Corps`,
    vocabulary: [
      { en: `headache`, fr: `mal de tête`, exampleEn: `I have a terrible headache. I need to lie down.`, exampleFr: `J'ai un terrible mal de tête. J'ai besoin de m'allonger.` },
      { en: `sick`, fr: `malade`, exampleEn: `I've been feeling sick all week.`, exampleFr: `Je me suis sentie malade toute la semaine.` },
      { en: `symptom`, fr: `symptôme`, exampleEn: `What are your symptoms? I'll describe them to the doctor.`, exampleFr: `Quels sont tes symptômes ? Je vais les décrire au médecin.` },
      { en: `prescription`, fr: `ordonnance`, exampleEn: `The doctor gave me a prescription for antibiotics.`, exampleFr: `Le médecin m'a donné une ordonnance pour des antibiotiques.` },
      { en: `painkiller`, fr: `analgésique / calmant`, exampleEn: `I took a painkiller but it's not working.`, exampleFr: `J'ai pris un analgésique mais ça ne fait pas effet.` },
      { en: `allergic`, fr: `allergique`, exampleEn: `I'm allergic to peanuts. It's very serious.`, exampleFr: `Je suis allergique aux cacahuètes. C'est très grave.` },
      { en: `recover`, fr: `récupérer / guérir`, exampleEn: `It took me two weeks to fully recover from the flu.`, exampleFr: `Ça m'a pris deux semaines pour récupérer complètement de la grippe.` },
      { en: `exhausted`, fr: `épuisé(e)`, exampleEn: `I'm completely exhausted. I haven't slept properly in days.`, exampleFr: `Je suis complètement épuisée. Je n'ai pas bien dormi depuis des jours.` },
      { en: `swollen`, fr: `enflé(e) / gonflé(e)`, exampleEn: `My ankle is swollen from the fall.`, exampleFr: `Ma cheville est enflée après la chute.` },
      { en: `sprain`, fr: `entorse`, exampleEn: `I sprained my wrist playing tennis.`, exampleFr: `Je me suis foulé le poignet en jouant au tennis.` },
      { en: `dizzy`, fr: `avoir le vertige / être étourdi(e)`, exampleEn: `I feel dizzy. I think I stood up too fast.`, exampleFr: `J'ai la tête qui tourne. Je pense que je me suis levée trop vite.` },
      { en: `nauseous`, fr: `avoir la nausée`, exampleEn: `The car ride made me feel nauseous.`, exampleFr: `Le trajet en voiture m'a donné la nausée.` },
      { en: `fever`, fr: `fièvre`, exampleEn: `She has a high fever. We need to call the doctor.`, exampleFr: `Elle a une forte fièvre. On doit appeler le médecin.` },
      { en: `sore throat`, fr: `mal de gorge`, exampleEn: `I have a sore throat. I can barely swallow.`, exampleFr: `J'ai mal à la gorge. J'arrive à peine à avaler.` },
      { en: `appointment`, fr: `rendez-vous (médical)`, exampleEn: `I booked an appointment with my doctor for Thursday.`, exampleFr: `J'ai pris rendez-vous chez mon médecin pour jeudi.` },
      { en: `insurance`, fr: `assurance (médicale)`, exampleEn: `Does your insurance cover this treatment?`, exampleFr: `Ton assurance couvre ce traitement ?` },
      { en: `rest`, fr: `se reposer`, exampleEn: `The doctor told me to rest for a few days.`, exampleFr: `Le médecin m'a dit de me reposer quelques jours.` },
      { en: `get better`, fr: `aller mieux / guérir`, exampleEn: `I hope you get better soon!`, exampleFr: `J'espère que tu vas vite aller mieux !` },
      { en: `checkup`, fr: `bilan de santé`, exampleEn: `I should go for a checkup. I haven't been in two years.`, exampleFr: `Je devrais faire un bilan de santé. Je n'y suis pas allée depuis deux ans.` },
      { en: `under the weather`, fr: `ne pas se sentir très bien`, exampleEn: `I've been feeling under the weather all week.`, exampleFr: `Je ne me sens pas très bien toute la semaine.` },
    ],
    expressions: [
      { expression: `I don't feel well.`, translation: `Je ne me sens pas bien.`, example: `I don't feel well. I think I need to go home.`, exampleTranslation: `Je ne me sens pas bien. Je crois que je dois rentrer.` },
      { expression: `I'm coming down with something.`, translation: `Je commence à tomber malade.`, example: `I'm coming down with something. My throat is sore.`, exampleTranslation: `Je commence à tomber malade. J'ai mal à la gorge.` },
      { expression: `Get well soon!`, translation: `Remets-toi vite !`, example: `I heard you're sick. Get well soon!`, exampleTranslation: `J'ai entendu que tu étais malade. Remets-toi vite !` },
      { expression: `I've been under the weather.`, translation: `Je ne suis pas dans mon assiette.`, example: `Sorry I missed your call. I've been under the weather.`, exampleTranslation: `Désolée d'avoir raté ton appel. Je ne suis pas dans mon assiette.` },
      { expression: `It's just a cold.`, translation: `C'est juste un rhume.`, example: `Don't panic! It's just a cold, not the flu.`, exampleTranslation: `Ne panique pas ! C'est juste un rhume, pas la grippe.` },
      { expression: `I should take it easy.`, translation: `Je devrais me ménager.`, example: `I've been pushing too hard lately. I should take it easy.`, exampleTranslation: `J'ai trop forcé ces derniers temps. Je devrais me ménager.` },
      { expression: `I need to sleep it off.`, translation: `J'ai besoin de dormir pour me remettre.`, example: `I feel terrible. I'll just sleep it off.`, exampleTranslation: `Je me sens terrible. Je vais juste dormir pour me remettre.` },
      { expression: `On the mend.`, translation: `En voie de guérison.`, example: `How are you feeling? — Better! I think I'm on the mend.`, exampleTranslation: `Comment tu te sens ? — Mieux ! Je crois que je suis en voie de guérison.` },
      { expression: `I've been burning the candle at both ends.`, translation: `Je me suis surmenée.`, example: `No wonder I'm sick. I've been burning the candle at both ends.`, exampleTranslation: `Pas étonnant que je sois malade. Je me suis surmenée.` },
      { expression: `Take care of yourself.`, translation: `Prends soin de toi.`, example: `You look exhausted. Please take care of yourself.`, exampleTranslation: `Tu as l'air épuisée. S'il te plaît, prends soin de toi.` },
    ],
    grammar: { title: `'Have to' et 'should' : obligation et conseil`, content: `Pour exprimer une obligation ou un conseil :

• have to = obligation (il faut que)
✅ I have to take this medicine twice a day.
✅ She has to rest for a week.

• should = conseil (tu devrais)
✅ You should drink more water.
✅ I should go to the doctor.

Différence :
→ have to = obligatoire (externe)
→ should = recommandé (opinion)

Négatif :
→ don't have to = pas obligatoire
  You don't have to come. (Tu n'es pas obligé de venir.)
→ shouldn't = déconseillé
  You shouldn't skip meals. (Tu ne devrais pas sauter de repas.)` },
    exercises: [
      { id: `9-t1`, type: "translation", question: `Je ne me sens pas bien. Je crois que je dois rentrer.`, answers: [`I don't feel well. I think I need to go home.`, `I'm not feeling well. I think I should go home.`, `I feel sick. I need to go home.`] },
      { id: `9-t2`, type: "translation", question: `Le médecin m'a dit de me reposer quelques jours.`, answers: [`The doctor told me to rest for a few days.`, `The doctor said I should rest for a few days.`, `My doctor told me to rest for a few days.`] },
      { id: `9-t3`, type: "translation", question: `J'espère que tu vas vite aller mieux !`, answers: [`I hope you get better soon!`, `Get well soon!`, `Hope you feel better soon!`] },
      { id: `9-t4`, type: "translation", question: `Je devrais boire plus d'eau.`, answers: [`I should drink more water.`, `I should be drinking more water.`] },
      { id: `9-t5`, type: "translation", question: `Ça m'a pris deux semaines pour récupérer complètement de la grippe.`, answers: [`It took me two weeks to fully recover from the flu.`, `I took two weeks to fully recover from the flu.`, `It took me two weeks to recover from the flu.`] },
      { id: `9-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`better`, `hope`, `I`, `soon`, `get`, `you`, `!`], answer: `I hope you get better soon!` },
      { id: `9-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`rest`, `days`, `to`, `for`, `have`, `few`, `a`, `I`], answer: `I have to rest for a few days.` },
      { id: `9-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`something`, `coming`, `with`, `I'm`, `down`], answer: `I'm coming down with something.` },
      { id: `9-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`water`, `should`, `You`, `drink`, `more`], answer: `You should drink more water.` },
      { id: `9-f1`, type: "fill-blank", question: `I have a ___ throat. I can barely swallow.`, hint: `Mal de...`, answers: [`sore`] },
      { id: `9-f2`, type: "fill-blank", question: `She has a high ___. We need to call the doctor.`, hint: `Fièvre`, answers: [`fever`] },
      { id: `9-f3`, type: "fill-blank", question: `I've been feeling ___ the weather all week.`, hint: `Ne pas se sentir bien (expression)`, answers: [`under`] },
      { id: `9-f4`, type: "fill-blank", question: `You ___ skip meals. It's bad for your health.`, hint: `Tu ne devrais pas...`, answers: [`shouldn't`, `should not`] },
      { id: `9-m1`, type: "mcq", question: `Quelle est la différence entre 'have to' et 'should' ?`, options: [`Aucune différence.`, `'Have to' = obligation, 'should' = conseil.`, `'Should' = obligation, 'have to' = conseil.`, `'Have to' est plus poli.`], correctIndex: 1, explanation: `'Have to' = obligatoire. 'Should' = c'est une bonne idée / je recommande.` },
      { id: `9-m2`, type: "mcq", question: `Comment dit-on 'Tu n'es pas obligé de venir' ?`, options: [`You shouldn't come.`, `You mustn't come.`, `You don't have to come.`, `You haven't to come.`], correctIndex: 2, explanation: `'Don't have to' = pas obligatoire (différent de 'mustn't' = interdit).` },
      { id: `9-m3`, type: "mcq", question: `Que signifie 'I'm coming down with something' ?`, options: [`Je descends en bas.`, `Je commence à tomber malade.`, `Je viens de quelque part.`, `Je tombe souvent.`], correctIndex: 1, explanation: `'Come down with something' = commencer à être malade.` },
      { id: `9-m4`, type: "mcq", question: `Que veut dire 'Get well soon' ?`, options: [`Va vite chez le médecin.`, `Mange bien vite.`, `Remets-toi vite.`, `Va chercher de l'eau.`], correctIndex: 2, explanation: `'Get well soon' = remets-toi vite (souhait de guérison).` },
      { id: `9-g1`, type: "guided", question: `Construis une phrase avec : 'should', 'take', 'easy'`, words: [`should`, `take`, `I`, `easy`, `it`], answers: [`I should take it easy.`] },
      { id: `9-g2`, type: "guided", question: `Construis une phrase avec : 'have to', 'doctor', 'appointment'`, words: [`have`, `to`, `I`, `make`, `a`, `doctor`, `appointment`], answers: [`I have to make a doctor appointment.`, `I need to make a doctor's appointment.`] },
      { id: `9-g3`, type: "guided", question: `Construis une phrase avec : 'feel', 'terrible', 'sleep', 'off'`, words: [`terrible`, `feel`, `I`, `I'll`, `it`, `off`, `sleep`], answers: [`I feel terrible. I'll sleep it off.`, `I feel terrible — I'll just sleep it off.`] },
    ],
  },
  {
    id: 10,
    theme: `Émotions & Sentiments`,
    vocabulary: [
      { en: `overwhelmed`, fr: `débordé(e) / submergé(e)`, exampleEn: `I'm feeling overwhelmed with everything going on.`, exampleFr: `Je me sens submergée par tout ce qui se passe.` },
      { en: `anxious`, fr: `anxieux/anxieuse`, exampleEn: `I get anxious before big presentations.`, exampleFr: `Je deviens anxieuse avant les grandes présentations.` },
      { en: `relieved`, fr: `soulagé(e)`, exampleEn: `I'm so relieved the exam is over.`, exampleFr: `Je suis tellement soulagée que l'examen soit terminé.` },
      { en: `frustrated`, fr: `frustré(e)`, exampleEn: `I get so frustrated when people don't listen.`, exampleFr: `Je suis tellement frustrée quand les gens n'écoutent pas.` },
      { en: `proud`, fr: `fier/fière`, exampleEn: `I'm really proud of how far I've come.`, exampleFr: `Je suis vraiment fière du chemin parcouru.` },
      { en: `confused`, fr: `confus(e) / perdu(e)`, exampleEn: `I'm confused. Can you explain that again?`, exampleFr: `Je suis perdue. Tu peux expliquer encore ?` },
      { en: `embarrassed`, fr: `gêné(e) / embarrassé(e)`, exampleEn: `I was so embarrassed when I called him by the wrong name.`, exampleFr: `J'étais tellement gênée quand je l'ai appelé par le mauvais nom.` },
      { en: `jealous`, fr: `jaloux/jalouse`, exampleEn: `I'm not jealous, I just wish I could travel like her.`, exampleFr: `Je ne suis pas jalouse, je souhaite juste pouvoir voyager comme elle.` },
      { en: `heartbroken`, fr: `le cœur brisé`, exampleEn: `She was heartbroken when he left.`, exampleFr: `Elle avait le cœur brisé quand il est parti.` },
      { en: `excited`, fr: `excité(e) / enthousiaste`, exampleEn: `I'm so excited about the trip! I can't sleep.`, exampleFr: `Je suis tellement excitée pour le voyage ! Je n'arrive pas à dormir.` },
      { en: `grateful`, fr: `reconnaissant(e)`, exampleEn: `I'm so grateful to have you in my life.`, exampleFr: `Je suis tellement reconnaissante de t'avoir dans ma vie.` },
      { en: `homesick`, fr: `avoir le mal du pays`, exampleEn: `After two months abroad, I started feeling homesick.`, exampleFr: `Après deux mois à l'étranger, j'ai commencé à avoir le mal du pays.` },
      { en: `moody`, fr: `lunatique / de mauvaise humeur`, exampleEn: `Sorry, I've been really moody today. Long week.`, exampleFr: `Désolée, j'ai été vraiment lunatique aujourd'hui. Longue semaine.` },
      { en: `upset`, fr: `bouleversé(e) / vexé(e)`, exampleEn: `She was really upset when she found out.`, exampleFr: `Elle était vraiment bouleversée quand elle a appris la nouvelle.` },
      { en: `nervous`, fr: `nerveux/nerveuse`, exampleEn: `I'm always nervous on first dates.`, exampleFr: `Je suis toujours nerveuse lors des premiers rendez-vous.` },
      { en: `in a good mood`, fr: `de bonne humeur`, exampleEn: `I'm in such a good mood today. The sun is out!`, exampleFr: `Je suis de si bonne humeur aujourd'hui. Le soleil est là !` },
      { en: `cry`, fr: `pleurer`, exampleEn: `That movie made me cry. It was so beautiful.`, exampleFr: `Ce film m'a fait pleurer. C'était tellement beau.` },
      { en: `burst out laughing`, fr: `éclater de rire`, exampleEn: `I burst out laughing in the middle of the meeting.`, exampleFr: `J'ai éclaté de rire au milieu de la réunion.` },
      { en: `mixed feelings`, fr: `sentiments mitigés`, exampleEn: `I have mixed feelings about moving abroad.`, exampleFr: `J'ai des sentiments mitigés à propos du déménagement à l'étranger.` },
      { en: `bottled up`, fr: `refouler ses émotions`, exampleEn: `I tend to bottle up my emotions instead of talking.`, exampleFr: `J'ai tendance à refouler mes émotions plutôt que d'en parler.` },
    ],
    expressions: [
      { expression: `I can't help it.`, translation: `Je n'y peux rien. / Je ne peux pas m'en empêcher.`, example: `I cry every time I watch that scene. I just can't help it.`, exampleTranslation: `Je pleure à chaque fois que je regarde cette scène. Je ne peux pas m'en empêcher.` },
      { expression: `I'm over the moon.`, translation: `Je suis aux anges.`, example: `I got the job! I'm absolutely over the moon!`, exampleTranslation: `J'ai eu le poste ! Je suis absolument aux anges !` },
      { expression: `I'm freaking out.`, translation: `Je panique / Je stress trop.`, example: `My interview is tomorrow. I'm freaking out!`, exampleTranslation: `Mon entretien est demain. Je stress trop !` },
      { expression: `I need to vent.`, translation: `J'ai besoin de me défouler / d'en parler.`, example: `Can I call you? I just need to vent.`, exampleTranslation: `Je peux t'appeler ? J'ai juste besoin d'en parler.` },
      { expression: `I feel so bad about it.`, translation: `Je me sens vraiment mal par rapport à ça.`, example: `I forgot her birthday. I feel so bad about it.`, exampleTranslation: `J'ai oublié son anniversaire. Je me sens vraiment mal.` },
      { expression: `That really got to me.`, translation: `Ça m'a vraiment touché(e).`, example: `His speech really got to me. I almost cried.`, exampleTranslation: `Son discours m'a vraiment touché. J'ai presque pleuré.` },
      { expression: `I'm on edge.`, translation: `Je suis sur les nerfs.`, example: `I haven't heard back yet. I'm on edge.`, exampleTranslation: `Je n'ai pas encore eu de réponse. Je suis sur les nerfs.` },
      { expression: `It hit me hard.`, translation: `Ça m'a frappé de plein fouet.`, example: `When she said that, it hit me hard.`, exampleTranslation: `Quand elle a dit ça, ça m'a frappé de plein fouet.` },
      { expression: `Let it go.`, translation: `Lâche prise. / Laisse tomber.`, example: `Stop worrying about it. Just let it go.`, exampleTranslation: `Arrête de t'inquiéter pour ça. Lâche juste prise.` },
      { expression: `I'm on cloud nine.`, translation: `Je suis au septième ciel.`, example: `He proposed! I'm on cloud nine right now.`, exampleTranslation: `Il a demandé en mariage ! Je suis au septième ciel.` },
    ],
    grammar: { title: `'So' et 'such' : intensifier ses émotions`, content: `On utilise 'so' et 'such' pour renforcer ce qu'on dit, comme 'tellement' en français.

• so + adjectif / adverbe
✅ I'm so tired. (Je suis tellement fatiguée.)
✅ She spoke so fast. (Elle parlait tellement vite.)

• such + a/an + adjectif + nom
✅ It was such a good movie. (C'était tellement un bon film.)
✅ He's such a nice guy. (C'est tellement un gars sympa.)

• such + adjectif + nom pluriel
✅ They're such great friends. (Ce sont de si bons amis.)

Astuce naturelle :
→ 'So' quand il n'y a pas de nom après
→ 'Such' quand il y a un nom après` },
    exercises: [
      { id: `10-t1`, type: "translation", question: `Je suis tellement soulagée que l'examen soit terminé.`, answers: [`I'm so relieved the exam is over.`, `I'm so relieved that the exam is over.`, `I'm relieved the exam is over.`] },
      { id: `10-t2`, type: "translation", question: `Ce film m'a fait pleurer. C'était tellement beau.`, answers: [`That movie made me cry. It was so beautiful.`, `The movie made me cry. It was so beautiful.`, `That film made me cry. It was so beautiful.`] },
      { id: `10-t3`, type: "translation", question: `Je ne peux pas m'en empêcher. Je pleure à chaque fois.`, answers: [`I can't help it. I cry every time.`, `I just can't help it. I cry every time.`] },
      { id: `10-t4`, type: "translation", question: `J'ai eu le poste ! Je suis aux anges !`, answers: [`I got the job! I'm over the moon!`, `I got the job! I'm on cloud nine!`, `I got the job! I'm absolutely over the moon!`] },
      { id: `10-t5`, type: "translation", question: `J'ai besoin d'en parler. Tu peux m'appeler ?`, answers: [`I need to vent. Can you call me?`, `I need to talk. Can you call me?`, `Can you call me? I need to vent.`] },
      { id: `10-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`really`, `freaking`, `I'm`, `out`], answer: `I'm really freaking out.` },
      { id: `10-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`so`, `about`, `bad`, `feel`, `it`, `I`], answer: `I feel so bad about it.` },
      { id: `10-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`me`, `got`, `really`, `it`, `to`, `That`], answer: `That really got to me.` },
      { id: `10-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`movie`, `such`, `It`, `a`, `was`, `good`, `!`], answer: `It was such a good movie!` },
      { id: `10-f1`, type: "fill-blank", question: `I'm ___ the moon! I got into university!`, hint: `Être aux anges (expression)`, answers: [`over`] },
      { id: `10-f2`, type: "fill-blank", question: `She was really ___ when she found out the truth.`, hint: `Bouleversée`, answers: [`upset`] },
      { id: `10-f3`, type: "fill-blank", question: `I have ___ feelings about moving. Excited but scared.`, hint: `Sentiments mitigés`, answers: [`mixed`] },
      { id: `10-f4`, type: "fill-blank", question: `He's ___ a kind person. I'm lucky to know him.`, hint: `Tellement (avec un nom après)`, answers: [`such`] },
      { id: `10-m1`, type: "mcq", question: `Comment dit-on 'Je suis tellement fatiguée' ?`, options: [`I'm such tired.`, `I'm so tired.`, `I'm very so tired.`, `I'm too tired much.`], correctIndex: 1, explanation: `'So' + adjectif : I'm so tired. 'Such' s'utilise avec un nom.` },
      { id: `10-m2`, type: "mcq", question: `Laquelle est correcte ?`, options: [`It was so a good movie.`, `It was such good movie.`, `It was such a good movie.`, `It was so good movie.`], correctIndex: 2, explanation: `'Such + a/an + adj + nom' : It was such a good movie.` },
      { id: `10-m3`, type: "mcq", question: `Que signifie 'I'm on edge' ?`, options: [`Je suis au bord d'une falaise.`, `Je suis sur les nerfs.`, `Je suis épuisée.`, `Je suis contente.`], correctIndex: 1, explanation: `'On edge' = nerveux/stressé, sur les nerfs.` },
      { id: `10-m4`, type: "mcq", question: `Que veut dire 'I need to vent' ?`, options: [`J'ai besoin d'air.`, `J'ai besoin de parler / me défouler.`, `J'ai besoin de ventiler ma maison.`, `J'ai besoin d'inventer quelque chose.`], correctIndex: 1, explanation: `'To vent' = exprimer ses frustrations, se défouler en parlant.` },
      { id: `10-g1`, type: "guided", question: `Construis une phrase avec : 'so', 'excited', 'trip'`, words: [`so`, `I'm`, `excited`, `about`, `trip`, `the`], answers: [`I'm so excited about the trip!`, `I'm so excited about the trip.`] },
      { id: `10-g2`, type: "guided", question: `Construis une phrase avec : 'such', 'kind', 'person'`, words: [`She's`, `such`, `a`, `kind`, `person`], answers: [`She's such a kind person.`] },
      { id: `10-g3`, type: "guided", question: `Construis une phrase avec : 'let', 'go', 'worrying'`, words: [`Let`, `it`, `go`, `Stop`, `worrying`], answers: [`Let it go. Stop worrying.`, `Stop worrying and let it go.`] },
    ],
  },
  {
    id: 11,
    theme: `Travail & Carrière`,
    vocabulary: [
      { en: `career`, fr: `carrière`, exampleEn: `She has built an impressive career in tech.`, exampleFr: `Elle a construit une carrière impressionnante dans la tech.` },
      { en: `boss`, fr: `patron(ne) / chef`, exampleEn: `My boss is really demanding but fair.`, exampleFr: `Mon patron est vraiment exigeant mais juste.` },
      { en: `colleague`, fr: `collègue`, exampleEn: `I get along well with most of my colleagues.`, exampleFr: `Je m'entends bien avec la plupart de mes collègues.` },
      { en: `meeting`, fr: `réunion`, exampleEn: `I have back-to-back meetings all morning.`, exampleFr: `J'ai des réunions enchaînées toute la matinée.` },
      { en: `deadline`, fr: `date limite / deadline`, exampleEn: `The deadline is Friday and I'm not even halfway done.`, exampleFr: `La deadline c'est vendredi et je suis même pas à moitié.` },
      { en: `raise`, fr: `augmentation de salaire`, exampleEn: `I'm going to ask for a raise next month.`, exampleFr: `Je vais demander une augmentation le mois prochain.` },
      { en: `promotion`, fr: `promotion`, exampleEn: `She got a promotion after just one year!`, exampleFr: `Elle a eu une promotion après seulement un an !` },
      { en: `quit`, fr: `démissionner / arrêter`, exampleEn: `I'm thinking about quitting my job and traveling.`, exampleFr: `Je pense à démissionner et à voyager.` },
      { en: `freelance`, fr: `freelance / indépendant(e)`, exampleEn: `I went freelance two years ago and I love it.`, exampleFr: `Je suis passée en freelance il y a deux ans et j'adore ça.` },
      { en: `remote`, fr: `à distance / télétravail`, exampleEn: `I work remote full-time. No commute!`, exampleFr: `Je travaille entièrement à distance. Pas de trajet !` },
      { en: `résumé / CV`, fr: `CV`, exampleEn: `I need to update my résumé before applying.`, exampleFr: `Je dois mettre à jour mon CV avant de postuler.` },
      { en: `interview`, fr: `entretien`, exampleEn: `I have a job interview tomorrow and I'm nervous.`, exampleFr: `J'ai un entretien demain et je suis nerveuse.` },
      { en: `hire`, fr: `embaucher`, exampleEn: `They hired her immediately after the interview.`, exampleFr: `Ils l'ont embauchée immédiatement après l'entretien.` },
      { en: `resign`, fr: `démissionner (formellement)`, exampleEn: `She resigned after being passed over for promotion.`, exampleFr: `Elle a démissionné après avoir été ignorée pour la promotion.` },
      { en: `overtime`, fr: `heures supplémentaires`, exampleEn: `I've been working overtime every day this week.`, exampleFr: `Je fais des heures sup tous les jours cette semaine.` },
      { en: `networking`, fr: `réseau / se créer un réseau`, exampleEn: `Networking is important in this industry.`, exampleFr: `Le réseau est important dans ce secteur.` },
      { en: `workload`, fr: `charge de travail`, exampleEn: `The workload has been insane lately.`, exampleFr: `La charge de travail est dingue ces derniers temps.` },
      { en: `team`, fr: `équipe`, exampleEn: `I work with an amazing team. We all support each other.`, exampleFr: `Je travaille avec une équipe incroyable. On se soutient tous.` },
      { en: `feedback`, fr: `retour / feedback`, exampleEn: `My manager gave me great feedback on my project.`, exampleFr: `Mon manager m'a donné un super retour sur mon projet.` },
      { en: `burnout`, fr: `épuisement professionnel`, exampleEn: `I experienced burnout last year. I had to take a break.`, exampleFr: `J'ai vécu un burnout l'année dernière. J'ai dû prendre une pause.` },
    ],
    expressions: [
      { expression: `I'm swamped.`, translation: `Je suis débordée.`, example: `Can we reschedule? I'm totally swamped this week.`, exampleTranslation: `On peut reporter ? Je suis totalement débordée cette semaine.` },
      { expression: `Let's touch base.`, translation: `Restons en contact / Faisons le point.`, example: `Let's touch base tomorrow morning before the meeting.`, exampleTranslation: `Faisons le point demain matin avant la réunion.` },
      { expression: `Think outside the box.`, translation: `Sortir des sentiers battus / Penser autrement.`, example: `We need new ideas. Let's think outside the box.`, exampleTranslation: `On a besoin de nouvelles idées. Pensons autrement.` },
      { expression: `I'm on it.`, translation: `Je m'en occupe.`, example: `The report needs to be done by noon. — I'm on it!`, exampleTranslation: `Le rapport doit être terminé pour midi. — Je m'en occupe !` },
      { expression: `Take the lead.`, translation: `Prendre les rênes / Diriger.`, example: `You know this project best. Why don't you take the lead?`, exampleTranslation: `Tu connais mieux ce projet. Pourquoi tu ne prends pas les rênes ?` },
      { expression: `Keep me posted.`, translation: `Tiens-moi au courant.`, example: `Let me know how the meeting goes. Keep me posted!`, exampleTranslation: `Dis-moi comment se passe la réunion. Tiens-moi au courant !` },
      { expression: `That's above my pay grade.`, translation: `C'est pas de mon ressort.`, example: `That's above my pay grade. Ask the manager.`, exampleTranslation: `C'est pas de mon ressort. Demande au manager.` },
      { expression: `I need to call it a day.`, translation: `Je dois arrêter pour aujourd'hui.`, example: `It's already 8pm. I need to call it a day.`, exampleTranslation: `Il est déjà 20h. Je dois arrêter pour aujourd'hui.` },
      { expression: `We're on the same page.`, translation: `On est sur la même longueur d'onde.`, example: `Great. So we're all on the same page about the plan?`, exampleTranslation: `Super. Alors on est tous d'accord sur le plan ?` },
      { expression: `I got the job!`, translation: `J'ai eu le poste !`, example: `They just called me. I got the job! I start Monday!`, exampleTranslation: `Ils viennent de m'appeler. J'ai eu le poste ! Je commence lundi !` },
    ],
    grammar: { title: `Le Present Continuous : parler de ce qui se passe en ce moment`, content: `Le Present Continuous décrit une action en cours ou une situation temporaire.

Formation : am/is/are + verbe-ing
✅ I'm working on a big project this week.
✅ She's looking for a new job.
✅ They're having a meeting right now.

Usages :
1. Action en ce moment : I'm eating lunch.
2. Situation temporaire : He's working overtime this month.
3. Futur planifié : I'm having an interview tomorrow.

Différence avec le présent simple :
→ I work in marketing. (habitude)
→ I'm working on a campaign. (maintenant / temporaire)

Né gate : I'm not working today.` },
    exercises: [
      { id: `11-t1`, type: "translation", question: `Je vais demander une augmentation le mois prochain.`, answers: [`I'm going to ask for a raise next month.`, `I'm asking for a raise next month.`, `I plan to ask for a raise next month.`] },
      { id: `11-t2`, type: "translation", question: `J'ai des réunions enchaînées toute la matinée.`, answers: [`I have back-to-back meetings all morning.`, `I've got back-to-back meetings all morning.`] },
      { id: `11-t3`, type: "translation", question: `Je m'en occupe. Le rapport sera prêt pour midi.`, answers: [`I'm on it. The report will be ready by noon.`, `I'm on it. I'll have the report done by noon.`] },
      { id: `11-t4`, type: "translation", question: `La charge de travail est dingue ces derniers temps.`, answers: [`The workload has been insane lately.`, `The workload is crazy lately.`, `My workload has been insane lately.`] },
      { id: `11-t5`, type: "translation", question: `Je pense à démissionner et à voyager.`, answers: [`I'm thinking about quitting my job and traveling.`, `I'm thinking of quitting and traveling.`, `I think about quitting my job and traveling.`] },
      { id: `11-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`swamped`, `I'm`, `week`, `totally`, `this`], answer: `I'm totally swamped this week.` },
      { id: `11-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`same`, `page`, `on`, `the`, `We're`], answer: `We're on the same page.` },
      { id: `11-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`base`, `tomorrow`, `touch`, `Let's`], answer: `Let's touch base tomorrow.` },
      { id: `11-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`lead`, `Why`, `take`, `the`, `you`, `don't`, `?`], answer: `Why don't you take the lead?` },
      { id: `11-f1`, type: "fill-blank", question: `I'm ___ about quitting my job. It's not working out.`, hint: `Penser à (en ce moment)`, answers: [`thinking`] },
      { id: `11-f2`, type: "fill-blank", question: `She ___ a promotion after just one year. Amazing!`, hint: `Obtenir (passé)`, answers: [`got`] },
      { id: `11-f3`, type: "fill-blank", question: `Keep me ___. I want to know how the interview goes.`, hint: `Tenir au courant`, answers: [`posted`] },
      { id: `11-f4`, type: "fill-blank", question: `I've been working ___. I haven't had a weekend off in months.`, hint: `Heures supplémentaires`, answers: [`overtime`] },
      { id: `11-m1`, type: "mcq", question: `Quelle phrase exprime une action en cours MAINTENANT ?`, options: [`I work on a report.`, `I worked on a report.`, `I'm working on a report.`, `I used to work on reports.`], correctIndex: 2, explanation: `Present Continuous (am/is/are + -ing) pour une action en cours maintenant.` },
      { id: `11-m2`, type: "mcq", question: `Que signifie 'I need to call it a day' ?`, options: [`J'ai besoin d'appeler quelqu'un.`, `Je dois arrêter de travailler pour aujourd'hui.`, `Je dois nommer la journée.`, `J'ai besoin de repos.`], correctIndex: 1, explanation: `'Call it a day' = arrêter le travail pour la journée.` },
      { id: `11-m3`, type: "mcq", question: `Comment dit-on 'Elle est en train de chercher un nouveau travail' ?`, options: [`She looks for a new job.`, `She is looking for a new job.`, `She was looking for a new job.`, `She look for a new job.`], correctIndex: 1, explanation: `Present Continuous : She is looking for a new job.` },
      { id: `11-m4`, type: "mcq", question: `Que veut dire 'I'm swamped' ?`, options: [`Je suis dans un marécage.`, `Je suis débordée / j'ai trop de boulot.`, `Je suis fatiguée.`, `Je nage bien.`], correctIndex: 1, explanation: `'Swamped' = submergé(e) de travail, débordé(e).` },
      { id: `11-g1`, type: "guided", question: `Construis une phrase avec : 'currently', 'working', 'project'`, words: [`I'm`, `currently`, `working`, `on`, `big`, `a`, `project`], answers: [`I'm currently working on a big project.`] },
      { id: `11-g2`, type: "guided", question: `Construis une phrase avec : 'quit', 'thinking', 'job'`, words: [`about`, `I'm`, `quitting`, `thinking`, `my`, `job`], answers: [`I'm thinking about quitting my job.`] },
      { id: `11-g3`, type: "guided", question: `Construis une phrase avec : 'got', 'job', 'start', 'Monday'`, words: [`I`, `got`, `the`, `job`, `I`, `start`, `Monday`], answers: [`I got the job! I start Monday.`, `I got the job. I start Monday!`] },
    ],
  },
  {
    id: 12,
    theme: `Météo & Saisons`,
    vocabulary: [
      { en: `freezing`, fr: `glacial / gelé(e)`, exampleEn: `It's absolutely freezing outside. I can't feel my fingers.`, exampleFr: `Il fait absolument glacial dehors. Je ne sens plus mes doigts.` },
      { en: `boiling`, fr: `brûlant / une chaleur étouffante`, exampleEn: `It's boiling today. Let's find some shade.`, exampleFr: `Il fait une chaleur étouffante aujourd'hui. Trouvons de l'ombre.` },
      { en: `breeze`, fr: `brise / petit vent`, exampleEn: `There's a nice breeze today. Perfect for a picnic.`, exampleFr: `Il y a une belle brise aujourd'hui. Parfait pour un pique-nique.` },
      { en: `stormy`, fr: `orageux`, exampleEn: `It's going to be stormy tonight. Stay indoors.`, exampleFr: `Ça va être orageux ce soir. Reste à l'intérieur.` },
      { en: `foggy`, fr: `brumeux / avec du brouillard`, exampleEn: `Drive carefully. It's very foggy on the highway.`, exampleFr: `Conduis prudemment. Il y a beaucoup de brouillard sur l'autoroute.` },
      { en: `humid`, fr: `humide`, exampleEn: `New York in August is so humid. I can't stand it.`, exampleFr: `New York en août est tellement humide. Je ne le supporte pas.` },
      { en: `mild`, fr: `doux (température)`, exampleEn: `The weather is surprisingly mild for January.`, exampleFr: `La météo est étonnamment douce pour janvier.` },
      { en: `pour`, fr: `pleuvoir à verse`, exampleEn: `It's pouring outside! I forgot my umbrella.`, exampleFr: `Il pleut à verse dehors ! J'ai oublié mon parapluie.` },
      { en: `heatwave`, fr: `canicule`, exampleEn: `They say there's a heatwave coming next week.`, exampleFr: `On dit qu'une canicule arrive la semaine prochaine.` },
      { en: `blizzard`, fr: `tempête de neige`, exampleEn: `School was cancelled because of the blizzard.`, exampleFr: `L'école a été annulée à cause de la tempête de neige.` },
      { en: `forecast`, fr: `prévisions météo`, exampleEn: `The forecast says rain all weekend. Great.`, exampleFr: `Les prévisions disent de la pluie tout le week-end. Super.` },
      { en: `degree`, fr: `degré`, exampleEn: `It's 38 degrees today. Way too hot to function.`, exampleFr: `Il fait 38 degrés aujourd'hui. Beaucoup trop chaud pour fonctionner.` },
      { en: `drizzle`, fr: `bruine / crachin`, exampleEn: `It's just drizzling. You don't need an umbrella.`, exampleFr: `Il bruine juste. Tu n'as pas besoin de parapluie.` },
      { en: `layer up`, fr: `s'habiller en couches`, exampleEn: `It's cold. Make sure you layer up.`, exampleFr: `Il fait froid. Assure-toi de t'habiller en couches.` },
      { en: `shelter`, fr: `abri / s'abriter`, exampleEn: `We took shelter under a tree during the storm.`, exampleFr: `On s'est abrité sous un arbre pendant la tempête.` },
      { en: `gloomy`, fr: `maussade / sombre`, exampleEn: `I hate gloomy weather. It affects my mood.`, exampleFr: `Je déteste le temps maussade. Ça affecte mon humeur.` },
      { en: `crisp`, fr: `frais et vivifiant`, exampleEn: `I love crisp autumn mornings. The air smells amazing.`, exampleFr: `J'adore les matins d'automne frais. L'air sent bon.` },
      { en: `scorching`, fr: `torride / brûlant`, exampleEn: `It was scorching at the festival. We needed more water.`, exampleFr: `C'était torride au festival. On avait besoin de plus d'eau.` },
      { en: `wind chill`, fr: `ressenti (froid ressenti)`, exampleEn: `It's ten degrees but the wind chill makes it feel like zero.`, exampleFr: `Il fait dix degrés mais le ressenti donne l'impression d'être à zéro.` },
      { en: `clear up`, fr: `se dégager (ciel)`, exampleEn: `The forecast says it should clear up by afternoon.`, exampleFr: `Les prévisions disent que ça devrait se dégager vers l'après-midi.` },
    ],
    expressions: [
      { expression: `What's the weather like?`, translation: `Quel temps fait-il ?`, example: `What's the weather like in London in winter? Cold and rainy?`, exampleTranslation: `Quel temps fait-il à Londres en hiver ? Froid et pluvieux ?` },
      { expression: `It's gorgeous out!`, translation: `Il fait un temps magnifique !`, example: `It's gorgeous out! We should go for a walk.`, exampleTranslation: `Il fait un temps magnifique ! On devrait aller se promener.` },
      { expression: `It's coming down.`, translation: `Ça tombe fort (pluie/neige).`, example: `Look outside. It's really coming down out there.`, exampleTranslation: `Regarde dehors. Ça tombe vraiment fort là-dehors.` },
      { expression: `Bundle up!`, translation: `Couvre-toi bien !`, example: `It's going to be cold tonight. Bundle up!`, exampleTranslation: `Il va faire froid ce soir. Couvre-toi bien !` },
      { expression: `I'm over this weather.`, translation: `J'en ai marre de ce temps.`, example: `Three weeks of rain. I'm so over this weather.`, exampleTranslation: `Trois semaines de pluie. J'en ai tellement marre de ce temps.` },
      { expression: `The weather is terrible.`, translation: `Le temps est horrible.`, example: `The weather is terrible. Let's just stay in.`, exampleTranslation: `Le temps est horrible. Restons juste à la maison.` },
      { expression: `Looks like rain.`, translation: `On dirait qu'il va pleuvoir.`, example: `Looks like rain. Did you bring an umbrella?`, exampleTranslation: `On dirait qu'il va pleuvoir. Tu as pris un parapluie ?` },
      { expression: `It's under the sun.`, translation: `Il fait soleil.`, example: `Everything looks better when it's sunny and under the sun.`, exampleTranslation: `Tout est plus beau sous le soleil.` },
      { expression: `April showers bring May flowers.`, translation: `La pluie d'avril amène les fleurs de mai.`, example: `I hate April rain but as they say, April showers bring May flowers.`, exampleTranslation: `Je déteste la pluie d'avril mais comme on dit, elle amène les fleurs de mai.` },
      { expression: `It's bitter cold.`, translation: `Il fait un froid mordant.`, example: `Step outside and it hits you — it's bitter cold today.`, exampleTranslation: `Sors dehors et ça te frappe — il fait un froid mordant aujourd'hui.` },
    ],
    grammar: { title: `Le futur avec 'will' : prédictions et décisions spontanées`, content: `'Will' sert à :

1. Faire des prédictions
✅ It will rain tomorrow. (Il va pleuvoir demain.)
✅ I think it'll clear up later. (Je pense que ça va se dégager plus tard.)

2. Décisions spontanées (prises à l'instant)
✅ It's cold? I'll take my coat then.

3. Promesses / offres
✅ I'll help you. / I'll call you later.

Forme contractée : will → 'll
✅ I'll, you'll, she'll, it'll, we'll, they'll

Négatif : won't (= will not)
✅ It won't snow this year.

Note : Pour les plans déjà décidés, on préfère 'going to' :
→ I'm going to take the bus. (décidé avant)
→ I'll take the bus. (décision spontanée)` },
    exercises: [
      { id: `12-t1`, type: "translation", question: `Quel temps fait-il à Paris en hiver ?`, answers: [`What's the weather like in Paris in winter?`, `What's the weather like in Paris during winter?`, `How's the weather in Paris in winter?`] },
      { id: `12-t2`, type: "translation", question: `Il fait une chaleur étouffante aujourd'hui. Trouvons de l'ombre.`, answers: [`It's boiling today. Let's find some shade.`, `It's absolutely boiling. Let's find some shade.`, `It's so hot today. Let's find some shade.`] },
      { id: `12-t3`, type: "translation", question: `Couvre-toi bien ! Il va faire froid ce soir.`, answers: [`Bundle up! It's going to be cold tonight.`, `Bundle up! It'll be cold tonight.`, `Cover up! It's going to be cold tonight.`] },
      { id: `12-t4`, type: "translation", question: `Je déteste le temps maussade. Ça affecte mon humeur.`, answers: [`I hate gloomy weather. It affects my mood.`, `I can't stand gloomy weather. It affects my mood.`] },
      { id: `12-t5`, type: "translation", question: `Les prévisions disent que ça va se dégager vers l'après-midi.`, answers: [`The forecast says it'll clear up by afternoon.`, `The forecast says it will clear up in the afternoon.`, `The weather forecast says it should clear up by the afternoon.`] },
      { id: `12-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`like`, `weather`, `the`, `What's`, `?`], answer: `What's the weather like?` },
      { id: `12-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`won't`, `tomorrow`, `It`, `snow`], answer: `It won't snow tomorrow.` },
      { id: `12-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`out`, `gorgeous`, `It's`, `!`], answer: `It's gorgeous out!` },
      { id: `12-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`Looks`, `rain`, `like`, `you`, `Did`, `umbrella`, `bring`, `an`, `?`], answer: `Looks like rain. Did you bring an umbrella?` },
      { id: `12-f1`, type: "fill-blank", question: `It's absolutely ___. I can't feel my toes!`, hint: `Glacial`, answers: [`freezing`] },
      { id: `12-f2`, type: "fill-blank", question: `It's ___ outside. We got completely soaked!`, hint: `Pleuvoir à verse`, answers: [`pouring`] },
      { id: `12-f3`, type: "fill-blank", question: `I love crisp autumn mornings. The air smells ___.`, hint: `Incroyable / bon`, answers: [`amazing`, `great`, `wonderful`, `fresh`] },
      { id: `12-f4`, type: "fill-blank", question: `The weather is ___. Let's just stay home and watch Netflix.`, hint: `Horrible / maussade`, answers: [`terrible`, `awful`, `horrible`, `gloomy`] },
      { id: `12-m1`, type: "mcq", question: `Quand utilise-t-on 'will' plutôt que 'going to' ?`, options: [`Pour une habitude.`, `Pour une décision spontanée ou une prédiction.`, `Pour une action passée.`, `Pour une action en cours.`], correctIndex: 1, explanation: `'Will' = décision prise à l'instant ou prédiction. 'Going to' = plan déjà décidé.` },
      { id: `12-m2`, type: "mcq", question: `Quelle est la forme négative de 'will' ?`, options: [`willn't`, `wont`, `won't`, `not will`], correctIndex: 2, explanation: `La forme négative de 'will' est 'won't' (contraction de 'will not').` },
      { id: `12-m3`, type: "mcq", question: `Que signifie 'It's coming down' ?`, options: [`Quelque chose descend.`, `Il pleut ou il neige fort.`, `Le temps s'améliore.`, `Ça va aller.`], correctIndex: 1, explanation: `'It's coming down' = la pluie ou la neige tombe abondamment.` },
      { id: `12-m4`, type: "mcq", question: `Comment dit-on 'Il fait un temps magnifique' ?`, options: [`It's gorgeous out.`, `It's a nice weather.`, `The weather is beauty.`, `It's sunny much.`], correctIndex: 0, explanation: `'It's gorgeous out!' = il fait un temps magnifique dehors.` },
      { id: `12-g1`, type: "guided", question: `Construis une phrase avec : 'won't', 'snow', 'year'`, words: [`snow`, `won't`, `It`, `this`, `year`], answers: [`It won't snow this year.`] },
      { id: `12-g2`, type: "guided", question: `Construis une phrase avec : 'forecast', 'rain', 'weekend'`, words: [`forecast`, `says`, `The`, `rain`, `all`, `weekend`], answers: [`The forecast says rain all weekend.`] },
      { id: `12-g3`, type: "guided", question: `Construis une phrase avec : 'over', 'weather', 'weeks'`, words: [`over`, `I'm`, `so`, `this`, `weeks`, `weather`, `of`, `three`], answers: [`I'm so over this weather after three weeks.`, `Three weeks of this weather. I'm so over it.`] },
    ],
  },
  {
    id: 13,
    theme: `Séries & Streaming`,
    vocabulary: [
      { en: `episode`, fr: `épisode`, exampleEn: `I can't stop. Just one more episode and I'll go to bed.`, exampleFr: `Je ne peux pas m'arrêter. Juste un épisode de plus et je vais me coucher.` },
      { en: `season`, fr: `saison`, exampleEn: `Did you watch the new season of Stranger Things?`, exampleFr: `Tu as regardé la nouvelle saison de Stranger Things ?` },
      { en: `plot`, fr: `intrigue / scénario`, exampleEn: `The plot gets really interesting after episode three.`, exampleFr: `L'intrigue devient vraiment intéressante après l'épisode trois.` },
      { en: `plot twist`, fr: `coup de théâtre / retournement de situation`, exampleEn: `I didn't see that plot twist coming at all!`, exampleFr: `Je n'avais pas du tout vu ce retournement de situation venir !` },
      { en: `cliffhanger`, fr: `fin en suspens`, exampleEn: `That cliffhanger was brutal. I need the next episode NOW.`, exampleFr: `Cette fin en suspens était brutale. J'ai besoin du prochain épisode MAINTENANT.` },
      { en: `cast`, fr: `casting / acteurs`, exampleEn: `The cast is incredible. Everyone is perfectly chosen.`, exampleFr: `Le casting est incroyable. Tout le monde est parfaitement choisi.` },
      { en: `spoiler`, fr: `spoiler`, exampleEn: `Don't spoil it for me! I haven't seen the finale yet.`, exampleFr: `Ne me spoile pas ! Je n'ai pas encore vu la finale.` },
      { en: `recommend`, fr: `recommander`, exampleEn: `Can you recommend a good thriller series?`, exampleFr: `Tu peux me recommander une bonne série policière ?` },
      { en: `overrated`, fr: `surestimé(e)`, exampleEn: `I think that show is overrated. I don't get the hype.`, exampleFr: `Je pense que cette série est surestimée. Je ne comprends pas l'engouement.` },
      { en: `underrated`, fr: `sous-estimé(e)`, exampleEn: `This show is so underrated. Not enough people watch it.`, exampleFr: `Cette série est tellement sous-estimée. Pas assez de gens la regardent.` },
      { en: `hooked`, fr: `accroché(e)`, exampleEn: `I was completely hooked from the first episode.`, exampleFr: `J'étais complètement accrochée dès le premier épisode.` },
      { en: `binge`, fr: `regarder en rafale / binge-watcher`, exampleEn: `I binged the whole show in three days.`, exampleFr: `J'ai binge-watché toute la série en trois jours.` },
      { en: `rewatch`, fr: `revoir`, exampleEn: `I've rewatched Friends so many times.`, exampleFr: `J'ai revu Friends tellement de fois.` },
      { en: `finale`, fr: `finale`, exampleEn: `The series finale was disappointing after such a good run.`, exampleFr: `La finale de la série était décevante après une aussi bonne course.` },
      { en: `character`, fr: `personnage`, exampleEn: `My favorite character is the one everyone hates.`, exampleFr: `Mon personnage préféré est celui que tout le monde déteste.` },
      { en: `villain`, fr: `méchant / antagoniste`, exampleEn: `The villain in this show is so well-written.`, exampleFr: `Le méchant dans cette série est tellement bien écrit.` },
      { en: `addictive`, fr: `addictif/addictive`, exampleEn: `This show is so addictive. I can't stop watching.`, exampleFr: `Cette série est tellement addictive. Je ne peux pas arrêter de regarder.` },
      { en: `subtitles`, fr: `sous-titres`, exampleEn: `I watch everything with subtitles to practice my English.`, exampleFr: `Je regarde tout avec des sous-titres pour pratiquer mon anglais.` },
      { en: `rerun`, fr: `rediffusion / épisode déjà vu`, exampleEn: `There's nothing on. Just reruns.`, exampleFr: `Il n'y a rien à la télé. Juste des rediffusions.` },
      { en: `clue`, fr: `indice`, exampleEn: `Did you catch that clue in episode two? It was foreshadowing!`, exampleFr: `Tu as remarqué cet indice dans l'épisode deux ? C'était prévisible !` },
    ],
    expressions: [
      { expression: `Have you seen...?`, translation: `Tu as vu... ?`, example: `Have you seen Succession? It's incredible.`, exampleTranslation: `Tu as vu Succession ? C'est incroyable.` },
      { expression: `I'm obsessed with this show.`, translation: `Je suis obsédée par cette série.`, example: `I can't stop talking about it. I'm absolutely obsessed with this show.`, exampleTranslation: `Je ne peux pas arrêter d'en parler. Je suis absolument obsédée par cette série.` },
      { expression: `Don't spoil it!`, translation: `Ne me spoile pas !`, example: `I'm only on season two! Don't spoil it!`, exampleTranslation: `Je suis seulement à la saison deux ! Ne me spoile pas !` },
      { expression: `It gets better after season one.`, translation: `Ça devient meilleur après la saison un.`, example: `Stick with it — it gets so much better after season one.`, exampleTranslation: `Continue — ça devient tellement meilleur après la saison un.` },
      { expression: `I didn't see that coming.`, translation: `Je n'avais pas vu ça venir.`, example: `That plot twist! I totally didn't see that coming.`, exampleTranslation: `Ce retournement ! Je n'avais absolument pas vu ça venir.` },
      { expression: `It left me speechless.`, translation: `Ça m'a laissé(e) sans voix.`, example: `The finale left me completely speechless.`, exampleTranslation: `La finale m'a complètement laissé sans voix.` },
      { expression: `The acting is top-notch.`, translation: `Le jeu d'acteurs est excellent.`, example: `Everything about this show is top-notch.`, exampleTranslation: `Tout dans cette série est excellent.` },
      { expression: `I'm on the edge of my seat.`, translation: `Je suis sur le bord de mon siège / Je suis captivée.`, example: `This thriller has me on the edge of my seat the whole time.`, exampleTranslation: `Ce thriller me tient captivée du début à la fin.` },
      { expression: `It's a slow burn.`, translation: `Ça monte lentement en puissance.`, example: `It's a slow burn but totally worth it.`, exampleTranslation: `Ça monte lentement en puissance mais ça vaut vraiment le coup.` },
      { expression: `I need more episodes!`, translation: `J'ai besoin de plus d'épisodes !`, example: `Season two can't come fast enough. I need more episodes!`, exampleTranslation: `La saison deux ne peut pas arriver assez vite. J'ai besoin de plus d'épisodes !` },
    ],
    grammar: { title: `Le Present Perfect avec 'already', 'yet', 'just', 'ever', 'never'`, content: `Ces mots s'utilisent souvent avec le Present Perfect :

• already = déjà (action terminée)
✅ I've already watched all three seasons.

• yet = encore / toujours (questions + négatif)
✅ Have you watched it yet? (Tu l'as déjà regardé ?)
✅ I haven't finished it yet. (Je n'ai pas encore fini.)

• just = juste / à l'instant
✅ I've just seen the finale! It was insane!

• ever = déjà (questions sur expériences)
✅ Have you ever watched a show in English?

• never = jamais
✅ I've never seen anything so good!` },
    exercises: [
      { id: `13-t1`, type: "translation", question: `Tu as vu Stranger Things ? C'est incroyable.`, answers: [`Have you seen Stranger Things? It's incredible.`, `Have you watched Stranger Things? It's incredible.`, `Did you see Stranger Things? It's amazing.`] },
      { id: `13-t2`, type: "translation", question: `Ne me spoile pas ! Je suis seulement à la saison deux.`, answers: [`Don't spoil it! I'm only on season two.`, `Don't spoil it for me! I'm only on season two.`] },
      { id: `13-t3`, type: "translation", question: `J'ai binge-watché toute la série en trois jours.`, answers: [`I binged the whole show in three days.`, `I binge-watched the whole show in three days.`, `I watched the whole show in three days.`] },
      { id: `13-t4`, type: "translation", question: `Je n'avais absolument pas vu ce retournement de situation venir.`, answers: [`I totally didn't see that plot twist coming.`, `I didn't see that plot twist coming at all.`, `I never saw that coming.`] },
      { id: `13-t5`, type: "translation", question: `C'est ma façon de pratiquer mon anglais : regarder avec des sous-titres.`, answers: [`I watch with subtitles to practice my English.`, `Watching with subtitles is how I practice my English.`, `I use subtitles to practice my English.`] },
      { id: `13-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`already`, `three`, `watched`, `I've`, `seasons`, `all`], answer: `I've already watched all three seasons.` },
      { id: `13-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`yet`, `watched`, `it`, `Have`, `you`, `?`], answer: `Have you watched it yet?` },
      { id: `13-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`finale`, `just`, `I've`, `seen`, `the`, `!`], answer: `I've just seen the finale!` },
      { id: `13-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`never`, `good`, `so`, `I've`, `anything`, `seen`], answer: `I've never seen anything so good.` },
      { id: `13-f1`, type: "fill-blank", question: `I was completely ___ from the first episode. I couldn't stop.`, hint: `Accroché(e)`, answers: [`hooked`, `addicted`] },
      { id: `13-f2`, type: "fill-blank", question: `The ___ at the end of episode 6 was brutal. I need to know what happens!`, hint: `Fin en suspens`, answers: [`cliffhanger`] },
      { id: `13-f3`, type: "fill-blank", question: `Have you ever ___ a show entirely in English, no subtitles?`, hint: `Regarder (participe passé)`, answers: [`watched`, `seen`] },
      { id: `13-f4`, type: "fill-blank", question: `This show is so ___. I can't stop thinking about it.`, hint: `Addictif`, answers: [`addictive`] },
      { id: `13-m1`, type: "mcq", question: `Comment dit-on 'Je n'ai pas encore fini' ?`, options: [`I haven't finished already.`, `I haven't finished yet.`, `I didn't finish yet.`, `I haven't yet finished already.`], correctIndex: 1, explanation: `'Yet' dans les phrases négatives : I haven't finished yet.` },
      { id: `13-m2`, type: "mcq", question: `Que signifie 'It's a slow burn' pour une série ?`, options: [`La série est courte.`, `La série commence vite.`, `La série monte lentement en puissance.`, `La série est mauvaise.`], correctIndex: 2, explanation: `'Slow burn' = une histoire qui se développe lentement mais de façon intense.` },
      { id: `13-m3`, type: "mcq", question: `'Have you ever watched a show in English?' signifie :`, options: [`Est-ce que tu as l'habitude de regarder en anglais ?`, `As-tu déjà regardé une série en anglais ?`, `Regardes-tu des séries en anglais ?`, `As-tu regardé cette série en anglais ?`], correctIndex: 1, explanation: `'Have you ever...' = as-tu déjà... (dans ta vie)` },
      { id: `13-m4`, type: "mcq", question: `Que veut dire 'I'm on the edge of my seat' ?`, options: [`Je suis assise au bord de la chaise.`, `Je suis complètement captivée / en suspens.`, `Je suis fatiguée.`, `Je suis mal assise.`], correctIndex: 1, explanation: `'On the edge of one's seat' = suspendu(e) à l'action, captivé(e).` },
      { id: `13-g1`, type: "guided", question: `Construis une phrase avec : 'never', 'seen', 'good'`, words: [`seen`, `I've`, `never`, `anything`, `good`, `so`], answers: [`I've never seen anything so good.`] },
      { id: `13-g2`, type: "guided", question: `Construis une phrase avec : 'just', 'seen', 'finale'`, words: [`just`, `I've`, `the`, `seen`, `finale`], answers: [`I've just seen the finale!`] },
      { id: `13-g3`, type: "guided", question: `Construis une phrase avec : 'coming', 'didn't', 'plot twist'`, words: [`didn't`, `I`, `see`, `that`, `coming`, `plot`, `twist`], answers: [`I didn't see that plot twist coming.`] },
    ],
  },
  {
    id: 14,
    theme: `Cinéma & Films`,
    vocabulary: [
      { en: `blockbuster`, fr: `grand succès au box-office`, exampleEn: `The new Marvel film is the biggest blockbuster of the year.`, exampleFr: `Le nouveau film Marvel est le plus grand succès de l'année.` },
      { en: `indie`, fr: `indépendant (film)`, exampleEn: `I prefer indie films over big Hollywood productions.`, exampleFr: `Je préfère les films indépendants aux grandes productions hollywoodiennes.` },
      { en: `director`, fr: `réalisateur/réalisatrice`, exampleEn: `The director is known for his unique visual style.`, exampleFr: `Le réalisateur est connu pour son style visuel unique.` },
      { en: `screenplay`, fr: `scénario`, exampleEn: `The screenplay was beautifully written.`, exampleFr: `Le scénario était magnifiquement écrit.` },
      { en: `soundtrack`, fr: `bande sonore`, exampleEn: `The soundtrack gives me chills every time.`, exampleFr: `La bande sonore me donne des frissons à chaque fois.` },
      { en: `box office`, fr: `box-office`, exampleEn: `It broke box office records on its opening weekend.`, exampleFr: `Il a battu des records au box-office lors de son week-end d'ouverture.` },
      { en: `sequel`, fr: `suite (d'un film)`, exampleEn: `The sequel was even better than the original.`, exampleFr: `La suite était encore meilleure que l'original.` },
      { en: `prequel`, fr: `préquelle`, exampleEn: `They're making a prequel. I hope it lives up to the original.`, exampleFr: `Ils font une préquelle. J'espère qu'elle sera à la hauteur de l'original.` },
      { en: `special effects`, fr: `effets spéciaux`, exampleEn: `The special effects are mind-blowing in this film.`, exampleFr: `Les effets spéciaux sont époustouflants dans ce film.` },
      { en: `trailer`, fr: `bande-annonce`, exampleEn: `I watched the trailer and I'm already obsessed.`, exampleFr: `J'ai regardé la bande-annonce et je suis déjà obsédée.` },
      { en: `premiere`, fr: `avant-première`, exampleEn: `She attended the world premiere in Los Angeles.`, exampleFr: `Elle a assisté à l'avant-première mondiale à Los Angeles.` },
      { en: `award`, fr: `récompense / prix`, exampleEn: `The film won three Academy Awards.`, exampleFr: `Le film a remporté trois Oscars.` },
      { en: `review`, fr: `critique / avis`, exampleEn: `The reviews are mixed. Some love it, some hate it.`, exampleFr: `Les critiques sont mitigées. Certains l'adorent, d'autres le détestent.` },
      { en: `mainstream`, fr: `grand public`, exampleEn: `This director avoids mainstream cinema.`, exampleFr: `Ce réalisateur évite le cinéma grand public.` },
      { en: `genre`, fr: `genre (cinématographique)`, exampleEn: `My favorite genre is psychological thrillers.`, exampleFr: `Mon genre préféré est le thriller psychologique.` },
      { en: `performance`, fr: `jeu d'acteur / performance`, exampleEn: `Her performance was stunning. She deserved the Oscar.`, exampleFr: `Son jeu d'actrice était époustouflant. Elle méritait l'Oscar.` },
      { en: `tear-jerker`, fr: `film qui arrache les larmes`, exampleEn: `I knew it was a tear-jerker but I still wasn't prepared.`, exampleFr: `Je savais que c'était un film larmoyant mais je n'étais toujours pas prête.` },
      { en: `reboot`, fr: `redémarrage / remake modernisé`, exampleEn: `Another superhero reboot? Hollywood has run out of ideas.`, exampleFr: `Encore un reboot de super-héros ? Hollywood est à court d'idées.` },
      { en: `gripping`, fr: `captivant / prenant`, exampleEn: `I couldn't put my phone down. The film was so gripping.`, exampleFr: `Je ne pouvais pas poser mon téléphone. Le film était tellement captivant.` },
      { en: `predictable`, fr: `prévisible`, exampleEn: `The ending was so predictable. I guessed it in the first scene.`, exampleFr: `La fin était tellement prévisible. Je l'avais devinée dès la première scène.` },
    ],
    expressions: [
      { expression: `What do you feel like watching?`, translation: `Tu as envie de regarder quoi ?`, example: `What do you feel like watching tonight? Comedy or thriller?`, exampleTranslation: `Tu as envie de regarder quoi ce soir ? Comédie ou thriller ?` },
      { expression: `It's worth watching.`, translation: `Ça vaut le coup de regarder.`, example: `I know it's long but it's totally worth watching.`, exampleTranslation: `Je sais que c'est long mais ça vaut vraiment le coup de regarder.` },
      { expression: `I'm not really in the mood for that.`, translation: `J'ai pas vraiment envie de ça.`, example: `A horror movie? I'm not really in the mood for that tonight.`, exampleTranslation: `Un film d'horreur ? J'ai pas vraiment envie de ça ce soir.` },
      { expression: `The ending ruined it for me.`, translation: `La fin a tout gâché pour moi.`, example: `I loved the film until the last ten minutes. The ending ruined it.`, exampleTranslation: `J'adorais le film jusqu'aux dix dernières minutes. La fin a tout gâché.` },
      { expression: `It blew my mind.`, translation: `Ça m'a époustouflé(e).`, example: `That documentary completely blew my mind.`, exampleTranslation: `Ce documentaire m'a complètement époustouflée.` },
      { expression: `I give it a 9 out of 10.`, translation: `Je lui donne un 9 sur 10.`, example: `The acting, the story, the music... I give it a 9 out of 10.`, exampleTranslation: `Le jeu, l'histoire, la musique... Je lui donne un 9 sur 10.` },
      { expression: `It was a real tearjerker.`, translation: `C'était un vrai film larmoyant.`, example: `I cried three times. It was a real tearjerker.`, exampleTranslation: `J'ai pleuré trois fois. C'était un vrai film larmoyant.` },
      { expression: `The hype is real.`, translation: `L'engouement est justifié.`, example: `I was skeptical but after watching it — the hype is real.`, exampleTranslation: `J'étais sceptique mais après l'avoir vu — l'engouement est justifié.` },
      { expression: `It didn't live up to the hype.`, translation: `Ça n'était pas à la hauteur des attentes.`, example: `Everyone said it was amazing but I thought it didn't live up to the hype.`, exampleTranslation: `Tout le monde disait que c'était incroyable mais à mon avis ça n'était pas à la hauteur.` },
      { expression: `I could watch it over and over.`, translation: `Je pourrais le regarder encore et encore.`, example: `It's such a comforting film. I could watch it over and over.`, exampleTranslation: `C'est un film tellement réconfortant. Je pourrais le regarder encore et encore.` },
    ],
    grammar: { title: `Exprimer une opinion : I think, I feel, In my opinion, To me`, content: `En anglais, on exprime souvent son opinion de façon directe mais polie :

• I think (that)... = je pense que
✅ I think the ending was brilliant.

• I feel like... = j'ai l'impression que
✅ I feel like the sequel wasn't as good.

• In my opinion... = à mon avis
✅ In my opinion, it's the best film of the year.

• To me... = pour moi
✅ To me, the acting made the whole film.

• Personally... = personnellement
✅ Personally, I prefer indie films.

Pour nuancer :
→ I kind of liked it. (J'ai plutôt aimé.)
→ It was a bit slow. (C'était un peu lent.)
→ I'm not a huge fan. (Je suis pas fan, fan.)` },
    exercises: [
      { id: `14-t1`, type: "translation", question: `Tu as envie de regarder quoi ce soir ? Comédie ou thriller ?`, answers: [`What do you feel like watching tonight? Comedy or thriller?`, `What are you in the mood to watch? Comedy or thriller?`] },
      { id: `14-t2`, type: "translation", question: `La fin a tout gâché pour moi.`, answers: [`The ending ruined it for me.`, `The ending spoiled it for me.`] },
      { id: `14-t3`, type: "translation", question: `À mon avis, c'est le meilleur film de l'année.`, answers: [`In my opinion, it's the best film of the year.`, `In my opinion it's the best movie of the year.`, `To me, it's the best film of the year.`] },
      { id: `14-t4`, type: "translation", question: `Les effets spéciaux sont époustouflants dans ce film.`, answers: [`The special effects are mind-blowing in this film.`, `The special effects are stunning in this film.`, `The visual effects are incredible in this film.`] },
      { id: `14-t5`, type: "translation", question: `J'ai regardé la bande-annonce et je suis déjà obsédée.`, answers: [`I watched the trailer and I'm already obsessed.`, `I saw the trailer and I'm already obsessed.`] },
      { id: `14-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`mind`, `completely`, `That`, `my`, `blew`, `documentary`], answer: `That documentary completely blew my mind.` },
      { id: `14-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`watching`, `worth`, `it's`, `watching`, `What`, `feel`, `you`, `do`, `like`, `?`], answer: `What do you feel like watching?` },
      { id: `14-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`hype`, `up`, `to`, `live`, `didn't`, `It`, `the`], answer: `It didn't live up to the hype.` },
      { id: `14-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`is`, `opinion`, `my`, `In`, `year`, `the`, `film`, `the`, `of`, `best`], answer: `In my opinion it is the best film of the year.` },
      { id: `14-f1`, type: "fill-blank", question: `The film ___ me three times. What a tearjerker.`, hint: `Faire pleurer`, answers: [`made me cry`, `had me crying`] },
      { id: `14-f2`, type: "fill-blank", question: `The acting ___ the whole film for me. She was incredible.`, hint: `Ce qui a fait... (passé)`, answers: [`made`, `saved`, `carried`] },
      { id: `14-f3`, type: "fill-blank", question: `I'm not really ___ the mood for a sad film tonight.`, hint: `Avoir envie de (expression)`, answers: [`in`] },
      { id: `14-f4`, type: "fill-blank", question: `The ending was so ___. I guessed it in the first ten minutes.`, hint: `Prévisible`, answers: [`predictable`] },
      { id: `14-m1`, type: "mcq", question: `Comment exprimer une opinion de façon nuancée ?`, options: [`I am thinking that...`, `I kind of liked it.`, `Me think it was good.`, `Is my opinion that...`], correctIndex: 1, explanation: `'Kind of' permet de nuancer : I kind of liked it = j'ai plutôt aimé.` },
      { id: `14-m2`, type: "mcq", question: `Que signifie 'It blew my mind' ?`, options: [`Ça m'a mis en colère.`, `Ça m'a explosé à la figure.`, `Ça m'a époustouflé.`, `Ça m'a dérangé.`], correctIndex: 2, explanation: `'Blow one's mind' = époustoufler, impressionner énormément.` },
      { id: `14-m3`, type: "mcq", question: `Quelle formule est la plus naturelle pour donner son avis ?`, options: [`My opinion is that it was good.`, `I am of the opinion that it was good.`, `To me, it was really good.`, `I opine that it was good.`], correctIndex: 2, explanation: `'To me...' est naturel et direct, parfait pour exprimer une opinion personnelle.` },
      { id: `14-m4`, type: "mcq", question: `'The hype is real' signifie :`, options: [`L'excitation est fausse.`, `L'engouement est justifié.`, `Le film est décevant.`, `C'est de la publicité.`], correctIndex: 1, explanation: `'The hype is real' = le film/produit vaut vraiment tout ce qu'on en dit.` },
      { id: `14-g1`, type: "guided", question: `Construis une phrase avec : 'opinion', 'acting', 'best'`, words: [`In`, `my`, `opinion`, `the`, `acting`, `was`, `the`, `best`, `part`], answers: [`In my opinion, the acting was the best part.`] },
      { id: `14-g2`, type: "guided", question: `Construis une phrase avec : 'worth', 'watching', 'long'`, words: [`worth`, `it's`, `long`, `watching`, `even`, `though`, `it's`], answers: [`It's worth watching even though it's long.`] },
      { id: `14-g3`, type: "guided", question: `Construis une phrase avec : 'feel like', 'tonight', 'comedy'`, words: [`feel`, `like`, `I`, `watching`, `a`, `tonight`, `comedy`], answers: [`I feel like watching a comedy tonight.`] },
    ],
  },
  {
    id: 15,
    theme: `Musique & Concerts`,
    vocabulary: [
      { en: `gig`, fr: `concert (informel)`, exampleEn: `We're going to a gig on Saturday. Want to come?`, exampleFr: `On va à un concert samedi. Tu veux venir ?` },
      { en: `lyrics`, fr: `paroles (de chanson)`, exampleEn: `I love the lyrics to this song. They're so deep.`, exampleFr: `J'adore les paroles de cette chanson. Elles sont tellement profondes.` },
      { en: `chorus`, fr: `refrain`, exampleEn: `The chorus is so catchy. I can't get it out of my head.`, exampleFr: `Le refrain est tellement accrocheur. Je n'arrive pas à me le sortir de la tête.` },
      { en: `beat`, fr: `rythme / beat`, exampleEn: `This beat is insane. I want to dance.`, exampleFr: `Ce rythme est dingue. J'ai envie de danser.` },
      { en: `band`, fr: `groupe (de musique)`, exampleEn: `My favorite band is coming to town next month.`, exampleFr: `Mon groupe préféré vient en ville le mois prochain.` },
      { en: `vibe`, fr: `ambiance / énergie`, exampleEn: `The vibe at that festival was incredible.`, exampleFr: `L'ambiance à ce festival était incroyable.` },
      { en: `hit`, fr: `tube / succès`, exampleEn: `They've had so many hits. Every song is a banger.`, exampleFr: `Ils ont eu tellement de tubes. Chaque chanson est un banger.` },
      { en: `sold out`, fr: `complet / épuisé`, exampleEn: `The concert is sold out. I should have bought tickets earlier.`, exampleFr: `Le concert est complet. J'aurais dû acheter des billets plus tôt.` },
      { en: `setlist`, fr: `programme de la soirée (liste de chansons)`, exampleEn: `I love when they play deep cuts, not just the setlist hits.`, exampleFr: `J'adore quand ils jouent des morceaux moins connus, pas juste les tubes du programme.` },
      { en: `streaming`, fr: `streaming (musique)`, exampleEn: `I pay for music streaming. It's worth it.`, exampleFr: `Je paie pour le streaming musical. Ça vaut le coup.` },
      { en: `playlist`, fr: `playlist`, exampleEn: `I spend too much time making the perfect playlist.`, exampleFr: `Je passe trop de temps à créer la playlist parfaite.` },
      { en: `genre`, fr: `genre musical`, exampleEn: `I'm into every genre. It depends on my mood.`, exampleFr: `Je suis fan de tous les genres. Ça dépend de mon humeur.` },
      { en: `earworm`, fr: `mélodie entêtante`, exampleEn: `This song is such an earworm. I've been humming it all day.`, exampleFr: `Cette chanson est tellement entêtante. Je la fredonne depuis toute la journée.` },
      { en: `acoustic`, fr: `acoustique`, exampleEn: `I prefer the acoustic version. It's more emotional.`, exampleFr: `Je préfère la version acoustique. C'est plus émouvant.` },
      { en: `remix`, fr: `remix`, exampleEn: `Have you heard the remix? It's even better.`, exampleFr: `Tu as entendu le remix ? C'est encore mieux.` },
      { en: `crowd`, fr: `foule`, exampleEn: `The crowd was electric. Everyone was singing along.`, exampleFr: `La foule était électrisée. Tout le monde chantait.` },
      { en: `goosebumps`, fr: `chair de poule`, exampleEn: `I got goosebumps when they played the opening chord.`, exampleFr: `J'ai eu la chair de poule quand ils ont joué le premier accord.` },
      { en: `album`, fr: `album`, exampleEn: `Their new album is on repeat in my house.`, exampleFr: `Leur nouvel album tourne en boucle chez moi.` },
      { en: `cover`, fr: `reprise (d'une chanson)`, exampleEn: `This cover is better than the original!`, exampleFr: `Cette reprise est meilleure que l'original !` },
      { en: `anthem`, fr: `hymne (chanson emblématique)`, exampleEn: `Don't Stop Me Now is a true anthem. Everyone knows it.`, exampleFr: `Don't Stop Me Now est un vrai hymne. Tout le monde le connaît.` },
    ],
    expressions: [
      { expression: `This song slaps.`, translation: `Cette chanson est une tuerie.`, example: `Have you heard their new single? It absolutely slaps!`, exampleTranslation: `Tu as entendu leur nouveau single ? C'est une vraie tuerie !` },
      { expression: `I'm obsessed with this album.`, translation: `Je suis obsédée par cet album.`, example: `I've had it on repeat for a week. I'm completely obsessed.`, exampleTranslation: `Je le joue en boucle depuis une semaine. Je suis complètement obsédée.` },
      { expression: `It's stuck in my head.`, translation: `J'ai ça dans la tête. / C'est un earworm.`, example: `That chorus is stuck in my head and I can't make it stop!`, exampleTranslation: `Ce refrain est coincé dans ma tête et je n'arrive pas à l'arrêter !` },
      { expression: `They're so underrated.`, translation: `Ils sont tellement sous-estimés.`, example: `I don't understand why they're not famous yet. They're so underrated.`, exampleTranslation: `Je ne comprends pas pourquoi ils ne sont pas encore connus. Ils sont tellement sous-estimés.` },
      { expression: `I've been listening to them on repeat.`, translation: `Je les écoute en boucle.`, example: `I can't stop. I've been listening to them on repeat all week.`, exampleTranslation: `Je n'arrive pas à arrêter. Je les écoute en boucle depuis toute la semaine.` },
      { expression: `The whole vibe just hits different.`, translation: `L'ambiance frappe différemment.`, example: `Hearing this song live — the whole vibe just hits different.`, exampleTranslation: `Entendre cette chanson en live — l'ambiance frappe vraiment différemment.` },
      { expression: `I got chills.`, translation: `J'ai eu des frissons.`, example: `When the piano started, I just got chills. So beautiful.`, exampleTranslation: `Quand le piano a commencé, j'ai eu des frissons. Tellement beau.` },
      { expression: `Name a song, I'll know it.`, translation: `Cite une chanson, je la connaîtrai.`, example: `I know every song from the 2000s. Name a song, I'll know it!`, exampleTranslation: `Je connais toutes les chansons des années 2000. Cite une chanson, je la connaîtrai !` },
      { expression: `This takes me back.`, translation: `Ça me ramène en arrière.`, example: `Oh my god, this song! It completely takes me back to high school.`, exampleTranslation: `Oh mon dieu, cette chanson ! Ça me ramène complètement au lycée.` },
      { expression: `Turn it up!`, translation: `Monte le son !`, example: `This is my jam! Turn it up!`, exampleTranslation: `C'est ma chanson préférée ! Monte le son !` },
    ],
    grammar: { title: `Le comparatif : comparer avec -er, more et as...as`, content: `Pour comparer deux choses :

• Adjectifs courts : + -er + than
✅ The acoustic version is quieter than the original.
✅ This beat is faster than the remix.

• Adjectifs longs (2+ syllabes) : more + adj + than
✅ The live version is more emotional than the studio one.
✅ This concert was more exciting than the last one.

• Égalité : as + adj + as
✅ The cover is as good as the original.
✅ His voice is as powerful as ever.

• Irréguliers : good → better, bad → worse, far → farther/further
✅ This album is better than their last one.
✅ The concert was even worse than I expected.` },
    exercises: [
      { id: `15-t1`, type: "translation", question: `Tu as entendu leur nouveau single ? C'est une vraie tuerie !`, answers: [`Have you heard their new single? It absolutely slaps!`, `Have you heard their new song? It totally slaps!`] },
      { id: `15-t2`, type: "translation", question: `Ce refrain est tellement accrocheur. J'ai ça dans la tête.`, answers: [`This chorus is so catchy. It's stuck in my head.`, `The chorus is so catchy. I can't get it out of my head.`] },
      { id: `15-t3`, type: "translation", question: `Leur nouvel album tourne en boucle chez moi.`, answers: [`Their new album is on repeat in my house.`, `I've had their new album on repeat.`, `Their new album has been on repeat all week.`] },
      { id: `15-t4`, type: "translation", question: `Ça me ramène complètement au lycée.`, answers: [`It completely takes me back to high school.`, `This takes me back to high school.`, `It takes me right back to high school.`] },
      { id: `15-t5`, type: "translation", question: `Je préfère la version acoustique. C'est plus émouvant.`, answers: [`I prefer the acoustic version. It's more emotional.`, `I like the acoustic version better. It's more emotional.`] },
      { id: `15-w1`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`than`, `version`, `better`, `acoustic`, `The`, `original`, `the`, `is`], answer: `The acoustic version is better than the original.` },
      { id: `15-w2`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`Takes`, `back`, `This`, `me`, `school`, `high`, `to`], answer: `This takes me back to high school.` },
      { id: `15-w3`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`head`, `stuck`, `my`, `It's`, `in`], answer: `It's stuck in my head.` },
      { id: `15-w4`, type: "word-order", question: `Remets les mots dans l'ordre.`, words: [`up`, `my`, `Turn`, `jam`, `it`, `is`, `This`, `!`], answer: `This is my jam! Turn it up!` },
      { id: `15-f1`, type: "fill-blank", question: `I got ___ when they started playing. It was magical.`, hint: `Chair de poule / frissons`, answers: [`chills`, `goosebumps`] },
      { id: `15-f2`, type: "fill-blank", question: `This song is such an ___. I've been humming it all day.`, hint: `Mélodie entêtante`, answers: [`earworm`] },
      { id: `15-f3`, type: "fill-blank", question: `The concert is ___ out. We needed to buy tickets months ago.`, hint: `Complet`, answers: [`sold`] },
      { id: `15-f4`, type: "fill-blank", question: `Their new album is even ___ than the last one. Incredible.`, hint: `Meilleur (comparatif irrégulier)`, answers: [`better`] },
      { id: `15-m1`, type: "mcq", question: `Comment compare-t-on avec 'emotional' (3 syllabes) ?`, options: [`more emotional than`, `emotionaler than`, `emotioner than`, `most emotional`], correctIndex: 0, explanation: `Pour les adjectifs longs (2+ syllabes), on utilise 'more + adj + than'.` },
      { id: `15-m2`, type: "mcq", question: `Que signifie 'This song slaps' en argot ?`, options: [`Cette chanson gifle.`, `Cette chanson est nulle.`, `Cette chanson est une tuerie / est très bien.`, `Cette chanson est douce.`], correctIndex: 2, explanation: `'Slaps' en argot moderne = c'est excellent, c'est une tuerie.` },
      { id: `15-m3`, type: "mcq", question: `Comment dit-on 'aussi bon que' ?`, options: [`more good as`, `as good as`, `better than`, `gooder than`], correctIndex: 1, explanation: `Égalité : as + adjectif + as = aussi... que.` },
      { id: `15-m4`, type: "mcq", question: `Que veut dire 'It hits different' ?`, options: [`Ça ne marche pas.`, `Ça frappe différemment / on le ressent autrement.`, `C'est différent de d'habitude.`, `Ça m'énerve.`], correctIndex: 1, explanation: `'Hits different' = on le ressent de façon particulière, différemment de d'habitude.` },
      { id: `15-g1`, type: "guided", question: `Construis une phrase avec : 'better', 'original', 'live version'`, words: [`live`, `version`, `better`, `The`, `than`, `is`, `the`, `original`], answers: [`The live version is better than the original.`] },
      { id: `15-g2`, type: "guided", question: `Construis une phrase avec : 'on repeat', 'week', 'album'`, words: [`on`, `I've`, `had`, `this`, `repeat`, `album`, `week`, `all`], answers: [`I've had this album on repeat all week.`] },
      { id: `15-g3`, type: "guided", question: `Construis une phrase avec : 'chills', 'when', 'started'`, words: [`chills`, `got`, `I`, `when`, `it`, `started`], answers: [`I got chills when it started.`] },
    ],
  },
];

export default days1to15;
