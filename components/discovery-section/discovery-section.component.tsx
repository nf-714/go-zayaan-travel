export default function DiscoverySectionComponent() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-stone-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-light text-stone-800 mb-8 leading-tight">
          Make your <span className="text-blue-600">move</span> and{" "}
          <span className="text-blue-600">discover</span>{" "}
          <span className="inline-block w-48 h-24 lg:w-32 lg:h-16 overflow-hidden mx-2 rounded-full align-middle">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-48 h-full object-cover"
            >
              <source
                src="https://f1pl1h42g5.ufs.sh/f/S0nwnmaGkaqoO0mXmrcLmcq5fk2Z9LFASRpEhy6KCXvo04wP"
                type="video/mp4"
              />
            </video>
          </span>
          world that&apos;s
          <span className="inline-block w-48 h-24 lg:w-32 lg:h-16 overflow-hidden mx-2 rounded-full align-middle">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-48 h-full object-cover"
            >
              <source
                src="https://f1pl1h42g5.ufs.sh/f/S0nwnmaGkaqo3g6c1jesyM98UfxdYOqQLeb6XV1P5DE2hIRJ"
                type="video/mp4"
              />
            </video>
          </span>{" "}
          waiting for you.
        </h2>
        <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          Traveling changes you. You see new places, meet new people, and become
          a new version of yourself.
        </p>
      </div>
    </section>
  );
}
