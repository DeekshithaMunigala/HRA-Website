export const Certifications = ({reference}: any) => {
    return (
        <section
            id="cta"
            className="container pt-24 sm:py-32"
            ref={reference}
        >
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <img
                        src={""}
                        alt=""
                        className="w-[500px] object-contain rounded-lg"
                    />
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Certifications offered
                            </h2>
                            <div className="p-8 font-bold">
                                <ul className="list-disc p-2 ml-1 leading-10 font-mono">
                                    <li>Internship Certificate</li>
                                    <li>Frontend Course Completion certificate</li>
                                    <li>Backend Course Completion certificate</li>
                                    <li>FullStack Course Completion certificate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
