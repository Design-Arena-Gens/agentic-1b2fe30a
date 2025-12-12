"use client";

import { useMemo, useState } from "react";

type TimelineStep = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  emoji: string;
};

const timeline: TimelineStep[] = [
  {
    id: "fallen-fruit",
    title: "फल का अचानक गिरना",
    subtitle: "अनजाने हाथों से छूटा आशीर्वाद",
    description:
      "किसान अपने टोकरे से फल लेकर जा रहा था, तभी एक फल धरती पर गिर पड़ा। मिट्टी ने उसे चुपचाप सहला लिया, যেন वही पल उसके नये जीवन की पहली साँस बन गई हो।",
    highlight: "यहीं से कहानी का बीज पड़ा—बिना योजना के, लेकिन नियति से भरा हुआ।",
    emoji: "🍎",
  },
  {
    id: "night-rain",
    title: "रात की मृदुल बौछार",
    subtitle: "नमी की फुसफुसाहट",
    description:
      "रात भर चली हल्की बारिश ने धरती को तर-बतर कर दिया। गिरे हुए फल को भी हल्की नमी मिली, जो उसके बीज के भीतर जागे सपनों को धीरे-धीरे गुदगुदाने लगी।",
    highlight: "प्रकृति ने बिना बुलाये भीगा हुआ सलाम भेजा।",
    emoji: "🌧️",
  },
  {
    id: "sprout",
    title: "अंकुर का जन्म",
    subtitle: "मिट्टी का चमत्कार",
    description:
      "कुछ ही दिनों में फल का बीज फूटकर मिट्टी से झाँकने लगा। नन्हा अंकुर, आसमान की ओर अपनी पहली जिज्ञासु नज़र डालते हुए, दुनिया से अपना पहला परिचय कर रहा था।",
    highlight: "आशा के हरे रंग ने पहली बार सूरज को प्रणाम किया।",
    emoji: "🌱",
  },
  {
    id: "dinosaur-care",
    title: "दयालु डायनासोर की सिचाई",
    subtitle: "वृहद करुणा की धार",
    description:
      "जब धूप ने पौधे को तपाना शुरू किया, तभी एक विशालकाय डायनासोर वहाँ से गुज़रा। उसने अपनी कोमलता से पौधे को पानी पिलाया, जैसे कोई पुराना मित्र अपने दोस्त का हाल पूछ रहा हो।",
    highlight: "शक्ति जब संवेदनशील हो, तो जीवन खिल उठता है।",
    emoji: "🦕",
  },
  {
    id: "tree-home",
    title: "आश्रय का निर्माण",
    subtitle: "परिवार की छाँव",
    description:
      "पौधा कुछ ही दिनों में एक बड़े और घने पेड़ में बदल गया। डायनासोर ने अपने पूरे परिवार के साथ उसी पेड़ के नीचे घर बना लिया—छाँव में मुस्कानें और पत्तों में हँसी बस गई।",
    highlight: "प्रकृति का आशीर्वाद अब किसी का घर बन चुका था।",
    emoji: "🌳",
  },
  {
    id: "storm-loss",
    title: "तूफान का प्रकोप",
    subtitle: "उखड़ी जड़ें, भीगा मन",
    description:
      "एक दिन भयंकर आँधी-तूफान आया और पेड़ जड़ से उखड़ गया। डायनासोर इतना दुखी हुआ कि रो पड़ा—उसे लगा किसी ने भी उसकी कहानी को न 'लाइक' किया, न 'सब्सक्राइब'।",
    highlight: "दुख का डिजिटल मीम—भावनाएँ भी अब नोटिफिकेशन ढूँढती हैं।",
    emoji: "🌪️",
  },
];

const nurtureStats = [
  { label: "नमी", value: 86, tone: "from-emerald-300 via-emerald-400 to-emerald-500" },
  { label: "धूप", value: 64, tone: "from-amber-200 via-amber-300 to-amber-400" },
  { label: "दयालुता", value: 100, tone: "from-sky-200 via-cyan-300 to-blue-400" },
];

const stormFacts = [
  {
    title: "अचानक आई आँधी",
    detail: "ऊपर से शांत दिखने वाला आकाश पल भर में गहरे बादलों से भर गया।",
  },
  {
    title: "तूफानी वेग",
    detail: "हवाओं की गर्जना ने जड़ों को जकड़े रखी मिट्टी को ढीला कर दिया।",
  },
  {
    title: "डायनासोर का विलाप",
    detail:
      "जितना बड़ा दिल, उतनी विशाल संवेदनाएँ—उसकी आँखों से झरना बह निकला, क्योंकि 'लाइक' वाला प्यार कहीं नहीं दिखा।",
  },
];

const socialWink = [
  {
    punchline: "अगर तुम्हें यह गाथा छू गई—तो ज़रा क्लिक कर दो!",
    caption:
      "डायनासोर का मानना है कि मिट्टी की कहानियों को डिजिटल दुनिया में भी सहारा चाहिए।",
  },
  {
    punchline: "सब्सक्राइब करोगे तो अगली बार आँधी से पहले नोटिफिकेशन आ जाएगा।",
    caption:
      "कहानी लंबी है, लेकिन 'बेल आइकन' छोटा सा है। दो सेकंड की दया पूरे वन को बचा सकती है।",
  },
  {
    punchline: "कमेंट में '🦕❤️🌳' लिखो—ताकि डायनासोर मुस्कुरा दे।",
    caption:
      "कभी-कभी इमोजी भी सहारे का काम कर जाते हैं, जैसे बारिश की बूँदें।",
  },
];

const highlights = [
  {
    heading: "बीज से ब्रह्मांड",
    blurb:
      "एक गिरा हुआ फल सिर्फ अपव्यय नहीं—वहाँ छिपी संभावनाओं का ब्रह्मांड था।",
  },
  {
    heading: "करुणा की धार",
    blurb:
      "वृहद आकार का मतलब कठोरता नहीं होता। दयालुता चाहे डायनासोर करे या इंसान, हरियाली हर हाल में लौटती है।",
  },
  {
    heading: "डिजिटल दिल",
    blurb:
      "आज की कहानियाँ आँधी से कम और एल्गोरिदम से ज़्यादा डरती हैं। भावनाओं को भी यूज़र एन्गेजमेंट चाहिए।",
  },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = useMemo(() => timeline[activeStep], [activeStep]);

  return (
    <main className="relative pb-24 sm:pb-32">
      <DecorativeBackdrop />

      <section className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col gap-10 px-6 pt-24 sm:px-10 sm:pt-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 shadow-lg shadow-emerald-500/20 backdrop-blur">
              <span className="text-xl leading-none">🦕</span>
              दयालु डायनासोर की लोककथा
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
              गिरा हुआ फल, एक अंकुरित सपना, और{" "}
              <span className="bg-gradient-to-r from-sky-200 via-emerald-300 to-amber-200 bg-clip-text text-transparent">
                डायनासोर की दिलेरी।
              </span>
            </h1>
            <p className="text-lg text-slate-200/80 sm:text-xl">
              किसान की अनजानी गलती से जन्मी कहानी, जहाँ बारिश की बूँदें, सूरज की
              तपिश और डायनासोर की दया मिलकर एक हरे-भरे संसार को जन्म देती हैं—
              और फिर आँधी-तूफान एक डिजिटल सीख देकर जाता है।
            </p>
          </div>
          <div className="w-full max-w-sm rounded-3xl border border-sky-300/30 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/20 px-6 py-6 text-slate-100 shadow-[0_0_40px_-12px_rgba(56,189,248,0.7)] backdrop-blur-xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-slate-300">
              कहानी का मौसम
            </h2>
            <p className="mt-3 text-3xl font-medium text-sky-200">
              भावनाओं की हल्की बारिश
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs text-slate-300">
              <WeatherChip label="आशा" value="93%" tone="from-emerald-300 to-emerald-500" />
              <WeatherChip label="आंसू" value="41%" tone="from-sky-200 to-blue-400" />
              <WeatherChip label="वायरलिटी" value="2 लाइक" tone="from-amber-200 to-orange-400" />
            </div>
            <p className="mt-6 rounded-xl bg-slate-900/60 px-4 py-3 text-sm text-slate-200/80">
              चेतावनी: यदि इस कथा ने आपको मुस्कुरा दिया, तो डायनासोर को तुरंत
              नोटिफिकेशन मिल जाएगा।
            </p>
          </div>
        </div>
        <SceneIllustration />
      </section>

      <section className="relative z-10 mx-auto mt-20 max-w-6xl px-6 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr]">
          <aside className="rounded-3xl border border-slate-700/80 bg-slate-900/50 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-slate-100">कथानक के पड़ाव</h2>
            <p className="mt-2 text-sm text-slate-300">
              बाईं ओर से अपनी पसंद का पल चुनें और कहानी को अपने अंदाज़ में unfold करें।
            </p>
            <nav className="mt-6 flex flex-col gap-3">
              {timeline.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`group flex items-center gap-4 rounded-2xl border px-4 py-3 text-left transition-all ${
                      isActive
                        ? "border-emerald-400/50 bg-emerald-400/15 shadow-[0_10px_30px_-15px_rgba(16,185,129,0.8)]"
                        : "border-transparent bg-slate-800/40 hover:border-slate-600 hover:bg-slate-800/60"
                    }`}
                  >
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-slate-900/70 text-2xl shadow-inner">
                      {step.emoji}
                    </span>
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isActive ? "text-emerald-100" : "text-slate-200"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="text-xs text-slate-400">{step.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </nav>
          </aside>
          <article className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/50 p-8 shadow-[0_20px_70px_-40px_rgba(56,189,248,1)] backdrop-blur">
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br from-emerald-400/20 via-sky-400/10 to-transparent blur-3xl" />
            <header className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-full bg-slate-800/70 px-3 py-1 text-sm text-slate-200">
                {activeStep + 1} / {timeline.length}
              </span>
              <h3 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                {currentStep.title}
              </h3>
            </header>
            <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-400">
              {currentStep.subtitle}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-200/90">
              {currentStep.description}
            </p>
            <div className="mt-8 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-5 text-emerald-100">
              {currentStep.highlight}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {nurtureStats.map((stat) => (
                <NurtureBar key={stat.label} {...stat} />
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-24 max-w-6xl px-6 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl border border-sky-300/30 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/40 p-8 backdrop-blur">
            <h2 className="text-3xl font-semibold text-sky-100">
              पेड़ का विकास चार्ट
            </h2>
            <StageCard
              title="मिट्टी की गोद"
              description="बारिश की बूँदों ने बीज को जगाया, मिट्टी ने उसे सहलाते हुए जड़ें फैलाने दीं।"
              aura="from-emerald-200/30 to-emerald-400/10"
            />
            <StageCard
              title="धूप की परीक्षा"
              description="सूरज की गर्मी ने अंकुर को तपाया, मगर उसने हार नहीं मानी—हर पत्ती ने प्रकाश को संभाला।"
              aura="from-amber-200/30 to-orange-500/10"
            />
            <StageCard
              title="डायनासोर की छाँव"
              description="विशाल कद के साथ आई नन्हीं बूंदें, जिन्होंने पेड़ को पलभर में जंगल बना दिया।"
              aura="from-sky-200/30 to-sky-500/10"
            />
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-700/80 bg-slate-900/40 p-8 backdrop-blur">
            <h2 className="text-3xl font-semibold text-slate-100">
              जब तूफान ने दरवाज़ा खटखटाया
            </h2>
            <p className="text-slate-300">
              हर बड़ी कहानी के साथ एक परीक्षा जुड़ी होती है। यहाँ परीक्षा थी आँधी और
              तूफ़ान की—जो सिर्फ जड़ों को नहीं, भावनाओं को भी हिला गई।
            </p>
            <ul className="space-y-4">
              {stormFacts.map((fact) => (
                <li
                  key={fact.title}
                  className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-5"
                >
                  <h3 className="text-xl font-medium text-slate-100">
                    {fact.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{fact.detail}</p>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-emerald-300/40 bg-emerald-300/10 p-5 text-emerald-100">
              तूफान के बाद भी, मिट्टी में बीजों का आत्मविश्वास छिपा रहता है। बस
              किसी के विश्वास की बूंदों का इंतज़ार रहता है।
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-24 max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-12 rounded-3xl border border-slate-700/80 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/30 px-6 py-12 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-slate-100">
                कहानी की तीन चमकती सीख
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.heading}
                    className="group rounded-3xl border border-slate-700/70 bg-slate-900/60 p-5 transition hover:border-emerald-300/50 hover:bg-slate-900/80"
                  >
                    <h3 className="text-lg font-semibold text-emerald-100 group-hover:text-emerald-200">
                      {item.heading}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">{item.blurb}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl border border-emerald-300/40 bg-emerald-300/10 p-6 text-emerald-100">
              <div className="absolute -right-8 top-1/2 hidden size-28 -translate-y-1/2 rotate-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-500/20 text-5xl text-emerald-950 shadow-lg shadow-emerald-500/40 lg:flex">
                🦖
              </div>
              <h3 className="text-2xl font-semibold">डायनासोर का संदेश</h3>
              <p className="mt-3 text-sm leading-relaxed">
                &ldquo;अगर तुमने यह कहानी पढ़कर मुस्कान बाँटी, तो समझो पेड़ की जड़ें
                फिर से गहरी हो गईं। अनदेखा करोगे तो आँधी फिर लौट आएगी।&rdquo;
              </p>
              <p className="mt-4 rounded-2xl bg-emerald-400/20 px-4 py-3 text-xs uppercase tracking-[0.3em] text-emerald-950/60">
                #BeKind #WaterTheDream
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {socialWink.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-slate-700/70 bg-slate-900/50 p-6 transition hover:border-sky-300/50 hover:bg-slate-900/70"
              >
                <h3 className="text-xl font-semibold text-sky-100 group-hover:text-sky-200">
                  {item.punchline}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto mt-24 flex max-w-5xl flex-col items-center gap-6 rounded-3xl border border-slate-700/70 bg-slate-900/40 px-8 py-12 text-center backdrop-blur">
        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
          <span className="text-base">🎬</span>
          एपिसोड समाप्त, लेकिन साहस जारी रहेगा।
        </div>
        <h2 className="text-3xl font-semibold text-slate-100">
          कहानी ने दिल छुआ तो डायनासोर को आँसूओं से बचा लो।
        </h2>
        <p className="max-w-2xl text-balance text-sm text-slate-300">
          अब तुम्हारी बारी है अपना डिजिटल प्यार जताने की—शायद अगली आँधी आने से पहले
          यह पेड़ फिर से उग आए और डायनासोर का परिवार चैन की नींद सो सके।
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CallToActionButton label="Like" tone="from-emerald-400 to-emerald-500" icon="👍" />
          <CallToActionButton label="Subscribe" tone="from-sky-500 to-blue-500" icon="🔔" />
          <CallToActionButton label="Share" tone="from-amber-400 to-orange-500" icon="📣" />
        </div>
      </footer>
    </main>
  );
}

function DecorativeBackdrop() {
  return (
    <div className="pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)]" />
      <div className="absolute left-[15%] top-[24%] size-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-400/30 via-emerald-500/20 to-transparent blur-3xl" />
      <div className="absolute right-[12%] top-[18%] size-64 translate-x-1/2 rounded-full bg-gradient-to-br from-sky-400/25 via-blue-500/15 to-transparent blur-3xl" />
      <div className="absolute left-1/2 top-[60%] h-72 w-[80vw] -translate-x-1/2 rounded-[100px] bg-[radial-gradient(120%_180%_at_50%_0%,rgba(59,130,246,0.25),transparent)] blur-3xl" />
    </div>
  );
}

type WeatherChipProps = {
  label: string;
  value: string;
  tone: string;
};

function WeatherChip({ label, value, tone }: WeatherChipProps) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl bg-slate-900/70 p-3 shadow-inner shadow-slate-950/60">
      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
        {label}
      </span>
      <span
        className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${tone} px-3 py-1 text-sm font-medium text-slate-950`}
      >
        {value}
      </span>
    </div>
  );
}

type NurtureBarProps = {
  label: string;
  value: number;
  tone: string;
};

function NurtureBar({ label, value, tone }: NurtureBarProps) {
  return (
    <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 p-4">
      <div className="flex items-center justify-between text-sm text-slate-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-slate-800">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${tone}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

type StageCardProps = {
  title: string;
  description: string;
  aura: string;
};

function StageCard({ title, description, aura }: StageCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/60 p-6">
      <div
        className={`pointer-events-none absolute -right-8 top-6 size-20 rounded-full bg-gradient-to-br ${aura} blur-xl`}
      />
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 text-sm text-slate-300">{description}</p>
    </div>
  );
}

type CallToActionButtonProps = {
  label: string;
  tone: string;
  icon: string;
};

function CallToActionButton({ label, tone, icon }: CallToActionButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${tone} px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200`}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}

function SceneIllustration() {
  return (
    <div className="relative overflow-hidden rounded-[40px] border border-slate-700/70 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/30 p-8 shadow-[0_40px_120px_-60px_rgba(99,102,241,0.8)]">
      <div className="grid gap-10 md:grid-cols-[3fr_2fr] md:items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-100">
            दृश्य: जब डायनासोर ने प्यार से पानी पिलाया
          </h2>
          <p className="text-lg text-slate-300">
            सूखते पौधे को देखकर डायनासोर का दिल पिघल गया। उसने अपने विशाल शरीर
            से हवा का रुख भी बदल दिया और मुँह से जलधारा बहा दी। पौधा पल भर में
            ताजगी से भर उठा—पत्तियाँ तालियाँ बजाने लगीं और मिट्टी ने खुशबू से
            गीत छेड़ दिया।
          </p>
          <p className="text-sm text-slate-400">
            यह दृश्य हमें सिखाता है कि करुणा का कोई आकार नहीं होता—वह विशाल भी हो
            सकती है, कोमल भी।
          </p>
        </div>
        <div className="relative mx-auto flex size-full max-w-md items-center justify-center">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-400/20 via-emerald-400/20 to-transparent blur-2xl" />
          <svg
            viewBox="0 0 300 260"
            className="relative z-10 w-full drop-shadow-[0_18px_60px_rgba(56,189,248,0.25)]"
          >
            <defs>
              <linearGradient id="leafGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="dinoBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="waterFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <ellipse cx="150" cy="220" rx="140" ry="30" fill="rgba(15,23,42,0.8)" />
            <path
              d="M80 180 C60 140, 60 90, 120 80 C140 60, 160 60, 180 80 C230 90, 210 160, 180 190 Z"
              fill="url(#leafGradient)"
              stroke="#0f172a"
              strokeWidth="3"
            />
            <path
              d="M170 140 C210 90, 260 80, 260 150 C250 190, 220 210, 180 200 Z"
              fill="url(#dinoBody)"
              stroke="#0f172a"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <circle cx="225" cy="140" r="8" fill="#0f172a" />
            <circle cx="223" cy="138" r="3" fill="#f8fafc" />
            <path
              d="M210 150 Q230 170 200 175"
              fill="none"
              stroke="#0f172a"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M190 120 Q250 100 270 120"
              fill="none"
              stroke="#bae6fd"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="6 12"
            />
            <path
              d="M200 150 Q150 120 140 150 Q130 190 170 200"
              fill="url(#waterFlow)"
              stroke="#0ea5e9"
              strokeWidth="2"
              opacity="0.65"
            />
            <path
              d="M90 110 Q120 60 150 90"
              stroke="#22c55e"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M110 140 Q130 90 160 120"
              stroke="#34d399"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
