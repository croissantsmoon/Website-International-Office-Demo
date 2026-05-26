// JS/pages/about/pcu-at-glance.js
function renderPcuAtGlance() {
    return `
        <div class="page" id="page-pcu-at-glance">
            <div style="padding-top: 80px;">

                <!-- Hero Section -->
                <div class="relative overflow-hidden bg-gradient-to-r from-[#0d2137] to-pcu-navy py-16 md:py-24">
                    <div class="absolute inset-0">
                        <img alt="Meridian University Campus" class="w-full h-full object-cover opacity-40"
                             src="https://picsum.photos/seed/mu-glance-hero/1400/600"
                             style="object-position: center 75%;"/>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-r from-[#0d2137]/70 to-pcu-navy/70"></div>
                    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
                        <a class="inline-flex items-center gap-1 text-white/60 text-sm mb-6 hover:text-white transition"
                           href="#" onclick="navigateTo('home');return false">
                            <i class="w-4 h-4" data-lucide="arrow-left"></i> Back to Home
                        </a>
                        <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">MU at Glance</h1>
                        <p class="text-white/80 text-lg max-w-3xl">Shaping Tomorrow's Global Leaders Today.</p>
                    </div>
                </div>

                <!-- Content Section -->
                <div class="bg-transparent">
                    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-20">

                        <!-- Introduction -->
                        <div class="mb-20 text-center">
                            <h2 class="font-display text-2xl md:text-3xl font-bold text-pcu-blue mb-6">About Meridian University</h2>
                            <p class="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                                Meridian is where future leaders are shaped through rigorous academics, cross-cultural collaboration, and real-world engagement. We invite you to be part of a globally connected university community, learning alongside accomplished faculty and fellow scholars who share the same vision of creating lasting positive impact on the world.
                            </p>
                        </div>

                        <!-- MU in Numbers -->
                        <div class="mb-20">
                            <div class="text-center mb-14 reveal">
                                <span class="inline-block px-4 py-1.5 bg-pcu-blue/10 text-pcu-blue text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">Facts &amp; Figures</span>
                                <h2 class="font-display text-3xl md:text-4xl font-bold text-pcu-blue" id="statsHeading">MU in Numbers</h2>
                            </div>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                                <div class="bg-gradient-to-br from-pcu-gold to-yellow-500 rounded-2xl p-8 text-center shadow-md border border-pcu-gold/20">
                                    <div class="text-4xl font-bold text-white mb-2">150</div>
                                    <p class="text-white/90 text-sm">QS World University Rankings 2026</p>
                                </div>
                                <div class="bg-gradient-to-br from-pcu-blue to-pcu-sky rounded-2xl p-8 text-center shadow-md border border-pcu-blue/20">
                                    <div class="text-4xl font-bold text-white mb-2">1987</div>
                                    <p class="text-white/90 text-sm">Founded</p>
                                </div>
                                <div class="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-center shadow-md border border-indigo-600/20">
                                    <div class="text-4xl font-bold text-white mb-2">6,248</div>
                                    <p class="text-white/90 text-sm">Students studying at MU</p>
                                </div>
                                <div class="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 text-center shadow-md border border-teal-500/20">
                                    <div class="text-4xl font-bold text-white mb-2">210</div>
                                    <p class="text-white/90 text-sm">International Partners</p>
                                </div>
                                <div class="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-center shadow-md border border-orange-500/20">
                                    <div class="text-4xl font-bold text-white mb-2">380+</div>
                                    <p class="text-white/90 text-sm">National Partners</p>
                                </div>
                                <div class="bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-8 text-center shadow-md border border-pink-500/20">
                                    <div class="text-4xl font-bold text-white mb-2">47,320</div>
                                    <p class="text-white/90 text-sm">Alumni worldwide</p>
                                </div>
                                <div class="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-8 text-center shadow-md border border-cyan-500/20">
                                    <div class="text-4xl font-bold text-white mb-2">8</div>
                                    <p class="text-white/90 text-sm">Faculties</p>
                                </div>
                                <div class="bg-gradient-to-br from-lime-500 to-green-500 rounded-2xl p-8 text-center shadow-md border border-lime-500/20">
                                    <div class="text-4xl font-bold text-white mb-2">64</div>
                                    <p class="text-white/90 text-sm">Programs</p>
                                </div>
                            </div>
                        </div>

                        <!-- Vision and Mission -->
                        <div class="mb-20 bg-gradient-to-br from-pcu-light/50 to-white rounded-3xl p-12 border border-pcu-blue/10">
                            <div class="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h2 class="font-display text-2xl md:text-3xl font-bold text-pcu-blue mb-6">Vision</h2>
                                    <p class="text-gray-600 leading-relaxed">To become a world-leading university that empowers individuals to contribute meaningfully to a diverse and interconnected global society.</p>
                                </div>
                                <div>
                                    <h2 class="font-display text-2xl md:text-3xl font-bold text-pcu-blue mb-6">Mission</h2>
                                    <ul class="space-y-3 text-gray-600">
                                        <li>• Uphold ACADEMIC INTEGRITY through rigorous research-driven education and ethical scholarship.</li>
                                        <li>• Foster GLOBAL CITIZENSHIP by cultivating cross-cultural competencies and international collaboration.</li>
                                        <li>• Drive COMMUNITY IMPACT by partnering with industry, government, and civil society to address real-world challenges.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- President's Message -->
                        <div class="mb-20">
                            <div class="mb-8">
                                <h2 class="font-display text-3xl md:text-4xl font-bold text-pcu-blue">President's Message</h2>
                            </div>
                            <div class="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg">
                                <div class="md:flex">
                                    <div class="md:w-1/3 overflow-hidden">
                                        <div class="relative h-80 md:h-full">
                                            <img alt="Prof. Dr. Michael Crawford" class="w-full h-full object-cover object-center"
                                                 src="https://picsum.photos/seed/mu-president/600/700"/>
                                            <div class="absolute inset-x-0 bottom-0 bg-black/80 p-4 text-white text-sm font-semibold leading-tight">
                                                Prof. Dr. Michael Crawford, Ph.D. — President of Meridian University
                                            </div>
                                        </div>
                                    </div>
                                    <div class="md:w-2/3 p-8">
                                        <p class="text-pcu-blue font-semibold mb-2">Prof. Dr. Michael Crawford, Ph.D.</p>
                                        <p class="text-gray-600 text-sm mb-6">President of Meridian University</p>
                                        <p class="text-gray-600 leading-relaxed mb-4">
                                            Welcome to Meridian University! For nearly four decades, we have remained steadfast in our commitment to shaping graduates who are not only academically accomplished but also globally aware, ethically grounded, and ready to lead.
                                        </p>
                                        <p class="text-gray-600 leading-relaxed mb-4">
                                            With over 47,000 alumni working across 60+ countries on every continent, Meridian proves that the quality of education we've built over decades creates lasting global impact.
                                        </p>
                                        <p class="text-gray-600 leading-relaxed">
                                            Our curriculum embraces a holistic approach — attending to the academic, professional, and personal development of each student. From orientation to graduation, we provide mentoring, a rich student life, and transformative international programs that prepare you for the world ahead.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Leadership Team -->
                        <div class="mb-20">
                            <h2 class="font-display text-2xl md:text-3xl font-bold text-pcu-blue mb-8 text-center">Leadership Team</h2>
                            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md">
                                    <div class="h-48 overflow-hidden">
                                        <img alt="Dr. Sarah Mitchell" class="w-full h-full object-cover"
                                             src="https://picsum.photos/seed/mu-vp1/400/300"
                                             style="object-position: center 27%;"/>
                                    </div>
                                    <div class="p-6 text-center">
                                        <h3 class="font-semibold text-lg text-pcu-blue mb-2">Dr. Sarah Mitchell, Ph.D.</h3>
                                        <p class="text-gray-600 text-sm">Vice President for Academic Affairs</p>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md">
                                    <div class="h-48 overflow-hidden">
                                        <img alt="Prof. James Hartley" class="w-full h-full object-cover"
                                             src="https://picsum.photos/seed/mu-vp2/400/300"
                                             style="object-position: center 20%;"/>
                                    </div>
                                    <div class="p-6 text-center">
                                        <h3 class="font-semibold text-lg text-pcu-blue mb-2">Prof. James Hartley, Ph.D.</h3>
                                        <p class="text-gray-600 text-sm">Vice President for Human Resources</p>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md">
                                    <div class="h-48 overflow-hidden">
                                        <img alt="Dr. Emily Chen" class="w-full h-full object-cover"
                                             src="https://picsum.photos/seed/mu-vp3/400/300"
                                             style="object-position: center 25%;"/>
                                    </div>
                                    <div class="p-6 text-center">
                                        <h3 class="font-semibold text-lg text-pcu-blue mb-2">Dr. Emily Chen, Ph.D.</h3>
                                        <p class="text-gray-600 text-sm">Vice President for Student Affairs</p>
                                    </div>
                                </div>
                                <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-md">
                                    <div class="h-48 overflow-hidden">
                                        <img alt="Dr. Robert Williams" class="w-full h-full object-cover"
                                             src="https://picsum.photos/seed/mu-vp4/400/300"
                                             style="object-position: center 20%;"/>
                                    </div>
                                    <div class="p-6 text-center">
                                        <h3 class="font-semibold text-lg text-pcu-blue mb-2">Dr. Robert Williams, Ph.D.</h3>
                                        <p class="text-gray-600 text-sm">Vice President for Development &amp; Technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Partners -->
                        <div class="mb-20">
                            <h2 class="font-display text-2xl md:text-3xl font-bold text-pcu-blue mb-8 text-center">Our Partners</h2>
                            <div class="grid md:grid-cols-2 gap-8 mb-8">

                                <!-- Domestic Partners -->
                                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-200 p-8 shadow-sm">
                                    <div class="flex items-start gap-4 mb-6">
                                        <div class="p-3 bg-blue-100 rounded-2xl">
                                            <i class="w-6 h-6 text-blue-600" data-lucide="building-2"></i>
                                        </div>
                                        <div>
                                            <h3 class="font-semibold text-lg text-blue-700 mb-2">Domestic Partners</h3>
                                            <p class="text-gray-600 text-sm">Meridian University collaborates with leading national institutions and corporations to open real-world opportunities for our students to gain industry experience.</p>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                                        <div class="bg-white rounded-lg p-3 text-center text-xs font-medium text-pcu-blue border border-gray-100">NovaTech Solutions</div>
                                        <div class="bg-white rounded-lg p-3 text-center text-xs font-medium text-pcu-blue border border-gray-100">Meridian Capital Bank</div>
                                        <div class="bg-white rounded-lg p-3 text-center text-xs font-medium text-pcu-blue border border-gray-100">Alliance Healthcare</div>
                                        <div class="bg-white rounded-lg p-3 text-center text-xs font-medium text-pcu-blue border border-gray-100">GreenBridge Energy</div>
                                        <div class="bg-white rounded-lg p-3 text-center text-xs font-medium text-pcu-blue border border-gray-100">Apex Logistics</div>
                                        <div class="bg-white rounded-lg p-3 text-center text-xs font-medium text-pcu-blue border border-gray-100">Beacon Media Group</div>
                                    </div>
                                    <a class="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition shadow-md w-full justify-center"
                                       href="#" onclick="navigateTo('domestic-partnership');return false">
                                        Learn More <i class="w-4 h-4" data-lucide="arrow-right"></i>
                                    </a>
                                </div>

                                <!-- International Partners -->
                                <div class="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl border border-green-200 p-8 shadow-sm">
                                    <div class="flex items-start gap-4 mb-6">
                                        <div class="p-3 bg-green-100 rounded-2xl">
                                            <i class="w-6 h-6 text-green-600" data-lucide="globe"></i>
                                        </div>
                                        <div>
                                            <h3 class="font-semibold text-lg text-green-700 mb-2">International Partnerships</h3>
                                            <p class="text-gray-600 text-sm">MU's global network spans 210 institutions across 38 countries and 6 continents, connecting us with leading universities worldwide and opening pathways for student mobility, research collaboration, and cultural exchange.</p>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-3 gap-4 mb-6">
                                        <div class="text-center p-4 bg-white/60 rounded-2xl border border-green-100">
                                            <div class="text-2xl font-bold text-green-600 mb-1">210</div>
                                            <p class="text-xs font-medium text-gray-600">International Partners</p>
                                        </div>
                                        <div class="text-center p-4 bg-white/60 rounded-2xl border border-green-100">
                                            <div class="text-2xl font-bold text-green-600 mb-1">38</div>
                                            <p class="text-xs font-medium text-gray-600">Countries</p>
                                        </div>
                                        <div class="text-center p-4 bg-white/60 rounded-2xl border border-green-100">
                                            <div class="text-2xl font-bold text-green-600 mb-1">6</div>
                                            <p class="text-xs font-medium text-gray-600">Continents</p>
                                        </div>
                                    </div>
                                    <a class="inline-flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition shadow-md w-full justify-center"
                                       href="#" onclick="navigateTo('international-partnership');return false">
                                        Learn More <i class="w-4 h-4" data-lucide="arrow-right"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <!-- CTA Section -->
                        <div class="bg-gradient-to-r from-[#0d2137] to-pcu-navy rounded-3xl p-12 text-white text-center">
                            <h2 class="font-display text-3xl font-bold mb-3">Join the MU Community</h2>
                            <p class="text-white/80 mb-8 max-w-2xl mx-auto">Become part of a university that transforms communities and prepares you to be a confident, globally aware leader.</p>
                            <div class="flex flex-wrap justify-center gap-4">
                                <a class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-pcu-blue font-semibold rounded-full hover:bg-pcu-light transition shadow-lg" href="#" onclick="navigateTo('explore');return false">
                                    Explore Programs <i class="w-4 h-4" data-lucide="arrow-right"></i>
                                </a>
                                <a class="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition" href="#" onclick="navigateTo('contact-us');return false">
                                    Contact Us
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    `;
}
