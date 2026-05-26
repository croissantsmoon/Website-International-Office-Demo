// JS/pages/home.js
function renderHomePage() {
    return `
        <div class="page active" id="page-home">

            <!-- HERO CAROUSEL -->
            <section class="relative z-10 w-full overflow-hidden" style="height: 600px; margin-top: 0; padding-top: 80px;">
                <div class="absolute inset-0" style="top: 80px;">
                    <div class="relative w-full h-full" id="heroCarousel">

                        <!-- Slide 1 -->
                        <div class="hero-slide active" style="background: linear-gradient(135deg, #0A2F6E 0%, #1E6FD9 60%, #3B82F6 100%);">
                            <div class="slide-bg" style="background-image:url('https://picsum.photos/seed/mu-campus-hero/1400/600');"></div>
                            <div class="absolute inset-0 flex items-center">
                                <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                                    <div class="max-w-2xl">
                                        <span class="inline-block px-4 py-1.5 bg-white/15 backdrop-blur text-white text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                                            Meridian University
                                        </span>
                                        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5" id="heroTitle">
                                            Your Gateway to<br/>Global Education
                                        </h1>
                                        <p class="text-white/80 text-lg md:text-xl mb-8 leading-relaxed max-w-lg" id="heroSubtitle">
                                            Discover world-class programs, vibrant campus life, and international opportunities at MU.
                                        </p>
                                        <div class="flex flex-wrap gap-4">
                                            <a class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-pcu-blue font-semibold rounded-full hover:bg-pcu-gold hover:text-white transition shadow-xl"
                                               href="#" onclick="navigateTo('explore');return false">
                                                Explore Programs <i class="w-4 h-4" data-lucide="arrow-right"></i>
                                            </a>
                                            <a class="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1c446d] border-transparent text-white font-semibold rounded-full hover:bg-[#163553] transition"
                                               href="#" onclick="navigateTo('explore');return false">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Decorative circles -->
                            <div class="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/5"></div>
                            <div class="absolute right-20 bottom-10 w-64 h-64 rounded-full bg-white/5"></div>
                            <div class="absolute right-60 top-20 w-40 h-40 rounded-full border-2 border-white/10"></div>
                        </div>

                        <!-- Slide 2 -->
                        <div class="hero-slide" style="background: linear-gradient(135deg, #0B1D3A 0%, #0A2F6E 50%, #1E6FD9 100%);">
                            <div class="slide-bg" style="background-image:url('https://picsum.photos/seed/mu-exchange-hero/1400/600');"></div>
                            <div class="absolute inset-0 flex items-center">
                                <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                                    <div class="max-w-2xl">
                                        <span class="inline-block px-6 py-2 bg-pcu-yellow/30 border border-pcu-yellow text-pcu-yellow text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                                            Student Exchange
                                        </span>
                                        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                                            Experience the<br/>World Together
                                        </h1>
                                        <p class="text-white/80 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                                            Join our semester exchange programs with 95+ partner universities across the globe.
                                        </p>
                                        <a class="inline-flex items-center gap-2 px-7 py-3.5 bg-pcu-gold text-white font-semibold rounded-full hover:bg-yellow-500 transition shadow-xl"
                                           href="#" onclick="navigateTo('semester-exchange');return false">
                                            Learn More <i class="w-4 h-4" data-lucide="arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute -right-10 top-1/4 w-80 h-80 rounded-full bg-pcu-gold/5"></div>
                        </div>

                        <!-- Slide 3 -->
                        <div class="hero-slide" style="background: linear-gradient(135deg, #1E6FD9 0%, #3B82F6 50%, #60A5FA 100%);">
                            <div class="slide-bg" style="background-image:url('https://picsum.photos/seed/mu-community-hero/1400/600');"></div>
                            <div class="absolute inset-0 flex items-center">
                                <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                                    <div class="max-w-2xl">
                                        <span class="inline-block px-4 py-1.5 bg-white/15 backdrop-blur text-white text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                                            Community Outreach
                                        </span>
                                        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                                            Make an Impact<br/>Globally
                                        </h1>
                                        <p class="text-white/80 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                                            Engage in meaningful community service while experiencing diverse local cultures.
                                        </p>
                                        <a class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-pcu-blue font-semibold rounded-full hover:bg-pcu-light transition shadow-xl"
                                           href="#" onclick="navigateTo('intl-students');return false">
                                            Discover More <i class="w-4 h-4" data-lucide="arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute right-10 bottom-20 w-72 h-72 rounded-full border-2 border-white/10"></div>
                        </div>

                    </div>
                    <button aria-label="Previous slide" class="carousel-nav left" id="heroPrev">&#8249;</button>
                    <button aria-label="Next slide" class="carousel-nav right" id="heroNext">&#8250;</button>
                    <!-- Dots -->
                    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10" id="heroDots"></div>
                </div>
            </section>

            <!-- FACTS & FIGURES -->
            <section class="py-20 bg-gradient-to-b from-pcu-light/40 to-white">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="text-center mb-14 reveal">
                        <span class="inline-block px-6 py-3 bg-gray-200 text-pcu-navy text-xs font-semibold rounded-2xl mb-4 uppercase tracking-wider">Facts &amp; Figures</span>
                        <h2 class="font-display text-3xl md:text-4xl font-bold text-pcu-navy" id="statsHeading">MU in Numbers</h2>
                    </div>
                    <div class="grid grid-cols-2 gap-6 reveal">

                        <!-- Top 150 -->
                        <div class="bg-pcu-yellow rounded-2xl p-8 text-center shadow-md border border-pcu-yellow/20 col-span-2 flex flex-col items-center justify-center min-h-full">
                            <div class="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                                <i class="w-8 h-8 text-white" data-lucide="award"></i>
                            </div>
                            <div class="text-3xl md:text-4xl font-bold text-white leading-tight">Top 150 University</div>
                            <div class="text-base text-white mt-2 leading-relaxed">QS World University Rankings 2026</div>
                        </div>

                        <!-- Active Students -->
                        <div class="flip-card bg-pcu-blue rounded-2xl shadow-sm border border-gray-100">
                            <div class="flip-card-inner">
                                <div class="flip-card-front bg-pcu-blue rounded-2xl p-6 text-center">
                                    <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                                        <i class="w-7 h-7 text-white" data-lucide="users"></i>
                                    </div>
                                    <div class="counter text-3xl md:text-4xl font-bold text-white" data-target="6248">0</div>
                                    <div class="text-xs text-white mt-1 uppercase tracking-wider font-medium">Active Students</div>
                                </div>
                                <div class="flip-card-back bg-pcu-blue/10">
                                    <div class="text-center">
                                        <div class="text-lg font-bold text-white mb-3">Student Breakdown</div>
                                        <div class="text-sm text-white space-y-1">
                                            <div>5,914 Bachelor students</div>
                                            <div>287 Masters students</div>
                                            <div>47 Doctoral students</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- International Partners -->
                        <div class="flip-card bg-pcu-magenta rounded-2xl shadow-sm border border-gray-100" onclick="navigateTo('international-partnership')">
                            <div class="flip-card-inner">
                                <div class="flip-card-front bg-pcu-magenta rounded-2xl p-6 text-center">
                                    <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                                        <i class="w-7 h-7 text-white" data-lucide="globe"></i>
                                    </div>
                                    <div class="counter text-3xl md:text-4xl font-bold text-white" data-target="210">0</div>
                                    <div class="text-xs text-white mt-1 uppercase tracking-wider font-medium">International Partners</div>
                                </div>
                                <div class="flip-card-back bg-pcu-magenta/10">
                                    <div class="text-center">
                                        <div class="text-lg font-bold text-white mb-2">International Partner List</div>
                                        <div class="text-sm text-white mb-3">More about our international partnerships</div>
                                        <div class="grid grid-cols-4 gap-3 items-center justify-items-center">
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">JP</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">KR</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">DE</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">NL</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">AU</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">CN</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">UK</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">US</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Founded -->
                        <div class="flip-card bg-pcu-green rounded-2xl shadow-sm border border-gray-100">
                            <div class="flip-card-inner">
                                <div class="flip-card-front bg-pcu-green rounded-2xl p-6 text-center">
                                    <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                                        <i class="w-7 h-7 text-white" data-lucide="calendar"></i>
                                    </div>
                                    <div class="text-3xl md:text-4xl font-bold text-white">1987</div>
                                    <div class="text-xs text-white mt-1 uppercase tracking-wider font-medium">Founded</div>
                                </div>
                                <div class="flip-card-back bg-pcu-green/10">
                                    <div class="text-center">
                                        <div class="text-lg font-bold text-white mb-1">Our History</div>
                                        <div class="text-sm text-white leading-relaxed">
                                            Meridian University was founded in 1987 with a mission to provide globally-minded education. Today it is recognized as a leading international university with strong academic programs and a vibrant multicultural campus community.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- National Partners -->
                        <div class="flip-card bg-pcu-yellow rounded-2xl shadow-sm border border-gray-100" onclick="navigateTo('domestic-partnership')">
                            <div class="flip-card-inner">
                                <div class="flip-card-front bg-pcu-yellow rounded-2xl p-6 text-center">
                                    <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                                        <i class="w-7 h-7 text-white" data-lucide="building-2"></i>
                                    </div>
                                    <div class="counter text-3xl md:text-4xl font-bold text-white" data-target="380">0</div>
                                    <div class="text-xs text-white mt-1 uppercase tracking-wider font-medium">National Partners</div>
                                </div>
                                <div class="flip-card-back bg-pcu-yellow/10">
                                    <div class="text-center">
                                        <div class="text-lg font-bold text-white mb-2">Domestic Partnership</div>
                                        <div class="text-sm text-white mb-3">Click to learn more about our domestic partnerships</div>
                                        <div class="grid grid-cols-5 gap-2 items-center justify-items-center">
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight">Tech Corp</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight">FinBank</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight">MedPlus</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight">GreenCo</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight">InnoLab</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight">AeroSys</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight">DataVis</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight">ClearMed</div>
                                            <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight">BioGen</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Alumni -->
                        <div class="bg-pcu-purple rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                            <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                                <i class="w-7 h-7 text-white" data-lucide="network"></i>
                            </div>
                            <div class="counter text-3xl md:text-4xl font-bold text-white" data-target="47320">0</div>
                            <div class="text-xs text-white mt-1 uppercase tracking-wider font-medium">MU Alumni Worldwide</div>
                        </div>

                        <!-- Study Programs -->
                        <div class="flip-card bg-pcu-red rounded-2xl shadow-sm border border-gray-100">
                            <div class="flip-card-inner">
                                <div class="flip-card-front bg-pcu-red rounded-2xl p-6 text-center">
                                    <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                                        <i class="w-7 h-7 text-white" data-lucide="book-open"></i>
                                    </div>
                                    <div class="counter text-3xl md:text-4xl font-bold text-white" data-target="64">0</div>
                                    <div class="text-xs text-white mt-1 uppercase tracking-wider font-medium">Study Programs</div>
                                </div>
                                <div class="flip-card-back bg-pcu-red/10">
                                    <div class="text-center">
                                        <div class="text-lg font-bold text-white mb-2">Program Highlights</div>
                                        <div class="text-sm text-white space-y-1">
                                            <div>Engineering &amp; Technology</div>
                                            <div>Business &amp; Management</div>
                                            <div>Humanities &amp; Arts</div>
                                            <div>Health Sciences</div>
                                            <div>Social Sciences</div>
                                            <div>And many more...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Faculties -->
                        <div class="flip-card bg-pcu-blue rounded-2xl shadow-sm border border-gray-100">
                            <div class="flip-card-inner">
                                <div class="flip-card-front bg-pcu-blue rounded-2xl p-6 text-center">
                                    <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                                        <i class="w-7 h-7 text-white" data-lucide="layers"></i>
                                    </div>
                                    <div class="counter text-3xl md:text-4xl font-bold text-white" data-target="8">0</div>
                                    <div class="text-xs text-white mt-1 uppercase tracking-wider font-medium">Faculties</div>
                                </div>
                                <div class="flip-card-back bg-pcu-blue/10 overflow-y-auto p-6 justify-start">
                                    <div class="space-y-4 text-left">
                                        <div class="text-lg font-bold text-white mb-4">Our Faculties</div>
                                        <div class="space-y-4">
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center">
                                                    <i class="w-6 h-6 text-gray-400" data-lucide="building"></i>
                                                </div>
                                                <div><span class="font-semibold text-white">Faculty of Engineering &amp; Technology</span></div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center">
                                                    <i class="w-6 h-6 text-gray-400" data-lucide="trending-up"></i>
                                                </div>
                                                <div><span class="font-semibold text-white">School of Business &amp; Management</span></div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center">
                                                    <i class="w-6 h-6 text-gray-400" data-lucide="palette"></i>
                                                </div>
                                                <div><span class="font-semibold text-white">Faculty of Humanities &amp; Creative Arts</span></div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center">
                                                    <i class="w-6 h-6 text-gray-400" data-lucide="activity"></i>
                                                </div>
                                                <div><span class="font-semibold text-white">Faculty of Health Sciences</span></div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center">
                                                    <i class="w-6 h-6 text-gray-400" data-lucide="flask-conical"></i>
                                                </div>
                                                <div><span class="font-semibold text-white">Faculty of Natural Sciences</span></div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center">
                                                    <i class="w-6 h-6 text-gray-400" data-lucide="users"></i>
                                                </div>
                                                <div><span class="font-semibold text-white">Faculty of Social Sciences</span></div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center">
                                                    <i class="w-6 h-6 text-gray-400" data-lucide="book"></i>
                                                </div>
                                                <div><span class="font-semibold text-white">Faculty of Education</span></div>
                                            </div>
                                            <div class="flex items-start gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center">
                                                    <i class="w-6 h-6 text-gray-400" data-lucide="briefcase"></i>
                                                </div>
                                                <div><span class="font-semibold text-white">Meridian Graduate School</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Accreditation -->
                        <div class="flip-card bg-pcu-yellow rounded-2xl shadow-sm border border-gray-100">
                            <div class="flip-card-inner">
                                <div class="flip-card-front bg-pcu-yellow rounded-2xl p-6 text-center">
                                    <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center">
                                        <i class="w-7 h-7 text-white" data-lucide="award"></i>
                                    </div>
                                    <div class="text-3xl md:text-4xl font-bold text-white">A+</div>
                                    <div class="text-xs text-white mt-1 uppercase tracking-wider font-medium">Excellent Accreditation</div>
                                </div>
                                <div class="flip-card-back bg-pcu-yellow/10 overflow-y-auto p-6">
                                    <div class="space-y-4 text-left">
                                        <div class="flex items-start gap-4">
                                            <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center shrink-0">
                                                <i class="w-6 h-6 text-gray-400" data-lucide="shield-check"></i>
                                            </div>
                                            <div>
                                                <div class="font-semibold text-white">National Accreditation Board (A+)</div>
                                                <div class="text-sm text-white">Highest rating in all institutional categories</div>
                                            </div>
                                        </div>
                                        <div class="flex items-start gap-4">
                                            <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center shrink-0">
                                                <i class="w-6 h-6 text-gray-400" data-lucide="globe"></i>
                                            </div>
                                            <div>
                                                <div class="font-semibold text-white">ABET Accreditation</div>
                                                <div class="text-sm text-white">Engineering, Computing &amp; Technology programs</div>
                                            </div>
                                        </div>
                                        <div class="flex items-start gap-4">
                                            <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center shrink-0">
                                                <i class="w-6 h-6 text-gray-400" data-lucide="award"></i>
                                            </div>
                                            <div>
                                                <div class="font-semibold text-white">AACSB Accreditation</div>
                                                <div class="text-sm text-white">School of Business &amp; Management</div>
                                            </div>
                                        </div>
                                        <div class="flex items-start gap-4">
                                            <div class="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center shrink-0">
                                                <i class="w-6 h-6 text-gray-400" data-lucide="star"></i>
                                            </div>
                                            <div>
                                                <div class="font-semibold text-white">AUN-QA Member</div>
                                                <div class="text-sm text-white">ASEAN University Network Quality Assurance</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <!-- STUDY AT MU -->
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="text-center mb-14 reveal">
                        <span class="inline-block px-6 py-3 bg-gray-200 text-pcu-navy text-xs font-semibold rounded-2xl mb-4 uppercase tracking-wider">Programs</span>
                        <h2 class="font-display text-3xl md:text-4xl font-bold text-pcu-navy" id="studyHeading">Study at MU</h2>
                        <p class="text-gray-500 mt-3 max-w-xl mx-auto">Explore a wide range of international academic programs tailored for global learners.</p>
                    </div>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">

                        <div class="program-card bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer" onclick="navigateTo('semester-exchange')">
                            <div class="h-44 bg-slate-100 overflow-hidden relative">
                                <img alt="Semester Exchange" class="w-full h-full object-cover" src="https://picsum.photos/seed/mu-prog1/800/440"/>
                                <div class="absolute inset-0 bg-pcu-blue/30"></div>
                            </div>
                            <div class="p-6">
                                <h3 class="font-semibold text-lg text-pcu-navy mb-2">Semester Exchange</h3>
                                <p class="text-sm text-gray-500 leading-relaxed">Spend a semester at MU and immerse yourself in our vibrant multicultural campus.</p>
                                <span class="inline-flex items-center gap-1 text-pcu-sky text-sm font-medium mt-4 hover:gap-2 transition-all">Learn more <i class="w-3.5 h-3.5" data-lucide="arrow-right"></i></span>
                            </div>
                        </div>

                        <div class="program-card bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer" onclick="navigateTo('intl-degree')">
                            <div class="h-44 bg-slate-100 overflow-hidden relative">
                                <img alt="International Degree Program" class="w-full h-full object-cover" src="https://picsum.photos/seed/mu-prog2/800/440"/>
                                <div class="absolute inset-0 bg-pcu-sky/30"></div>
                            </div>
                            <div class="p-6">
                                <h3 class="font-semibold text-lg text-pcu-navy mb-2">International Degree Program</h3>
                                <p class="text-sm text-gray-500 leading-relaxed">Complete your full degree at MU with world-class education and global perspectives.</p>
                                <span class="inline-flex items-center gap-1 text-pcu-sky text-sm font-medium mt-4 hover:gap-2 transition-all">Learn more <i class="w-3.5 h-3.5" data-lucide="arrow-right"></i></span>
                            </div>
                        </div>

                        <div class="program-card bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer" onclick="navigateTo('cop')">
                            <div class="h-44 bg-slate-100 overflow-hidden relative">
                                <img alt="International Community Outreach Program" class="w-full h-full object-cover" src="https://picsum.photos/seed/mu-prog3/800/440"/>
                                <div class="absolute inset-0 bg-pcu-yellow/30"></div>
                            </div>
                            <div class="p-6">
                                <h3 class="font-semibold text-lg text-pcu-navy mb-2">International Community Outreach Program</h3>
                                <p class="text-sm text-gray-500 leading-relaxed">Service learning combining academic development with social impact in local communities.</p>
                                <span class="inline-flex items-center gap-1 text-pcu-sky text-sm font-medium mt-4 hover:gap-2 transition-all">Learn more <i class="w-3.5 h-3.5" data-lucide="arrow-right"></i></span>
                            </div>
                        </div>

                        <div class="program-card bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer" onclick="navigateTo('joint-double-degree')">
                            <div class="h-44 bg-slate-100 overflow-hidden relative">
                                <img alt="Joint/Double Degree" class="w-full h-full object-cover" src="https://picsum.photos/seed/mu-prog4/800/440"/>
                                <div class="absolute inset-0 bg-pcu-purple/30"></div>
                            </div>
                            <div class="p-6">
                                <h3 class="font-semibold text-lg text-pcu-navy mb-2">Joint/Double Degree</h3>
                                <p class="text-sm text-gray-500 leading-relaxed">Earn degrees from MU and a partner university simultaneously.</p>
                                <span class="inline-flex items-center gap-1 text-pcu-sky text-sm font-medium mt-4 hover:gap-2 transition-all">Learn more <i class="w-3.5 h-3.5" data-lucide="arrow-right"></i></span>
                            </div>
                        </div>

                        <div class="program-card bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer" onclick="navigateTo('pcu-students')">
                            <div class="h-44 bg-slate-100 overflow-hidden relative">
                                <img alt="Internship" class="w-full h-full object-cover" src="https://picsum.photos/seed/mu-prog5/800/440"/>
                                <div class="absolute inset-0 bg-pcu-green/30"></div>
                            </div>
                            <div class="p-6">
                                <h3 class="font-semibold text-lg text-pcu-navy mb-2">Internship</h3>
                                <p class="text-sm text-gray-500 leading-relaxed">Gain international work experience through our global internship network.</p>
                                <span class="inline-flex items-center gap-1 text-pcu-sky text-sm font-medium mt-4 hover:gap-2 transition-all">Learn more <i class="w-3.5 h-3.5" data-lucide="arrow-right"></i></span>
                            </div>
                        </div>

                        <div class="program-card rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center p-8"
                             style="background: linear-gradient(to right, #245484, #133256);"
                             onclick="navigateTo('explore')">
                            <div class="text-center text-white">
                                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                                    <i class="w-8 h-8" data-lucide="compass"></i>
                                </div>
                                <h3 class="font-semibold text-xl mb-2">Explore All Programs</h3>
                                <p class="text-white/70 text-sm">Find the right opportunity for your academic journey.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <!-- NEWS -->
            <section class="py-20 bg-gray-50">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10 reveal gap-6">
                        <div>
                            <span class="inline-block px-6 py-3 bg-gray-200 text-pcu-navy text-xs font-semibold rounded-2xl mb-4 uppercase tracking-wider">Latest Updates</span>
                            <h2 class="font-display text-3xl md:text-4xl font-bold text-pcu-navy" id="newsHeading">MU International News</h2>
                            <p class="max-w-2xl text-gray-600 mt-3">Read the latest stories, partnership announcements, and student achievements from Meridian University.</p>
                        </div>
                        <a class="inline-flex items-center gap-1 text-pcu-sky font-medium text-sm hover:gap-2 transition-all"
                           href="#" onclick="navigateTo('news');return false">
                            View All News <i class="w-4 h-4" data-lucide="arrow-right"></i>
                        </a>
                    </div>
                    <div class="grid lg:grid-cols-3 gap-6 reveal" id="homeNews"></div>
                </div>
            </section>

            <!-- DOWNLOAD CENTER -->
            <section class="py-20 bg-white">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="text-center mb-12 reveal">
                        <span class="inline-block px-6 py-3 bg-gray-200 text-pcu-navy text-xs font-semibold rounded-2xl mb-4 uppercase tracking-wider">Resources</span>
                        <h2 class="font-display text-3xl md:text-4xl font-bold text-pcu-navy">Download Center</h2>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto reveal">

                        <a class="bg-pcu-blue/10 rounded-2xl p-8 text-center program-card block border border-pcu-blue/10 hover:shadow-lg transition-all"
                           href="#">
                            <img alt="International Students Guidebook" class="mx-auto mb-5 w-32 h-32 rounded-3xl border border-white/20 shadow-sm object-cover" src="https://picsum.photos/seed/mu-guidebook/128/128"/>
                            <h3 class="font-semibold text-pcu-navy text-lg mb-2">International Students Guidebook</h3>
                            <p class="text-sm text-gray-500 mb-5">Everything you need to know about studying at MU.</p>
                            <span class="inline-flex items-center gap-2 px-5 py-2.5 bg-pcu-navy text-white text-sm font-medium rounded-full">
                                <i class="w-4 h-4" data-lucide="download"></i> Download PDF
                            </span>
                        </a>

                        <a class="bg-pcu-blue/10 rounded-2xl p-8 text-center program-card block border border-pcu-blue/10 hover:shadow-lg transition-all"
                           href="#">
                            <img alt="MU Global Booklet" class="mx-auto mb-5 w-32 h-32 rounded-3xl border border-white/20 shadow-sm object-cover" src="https://picsum.photos/seed/mu-booklet/128/128"/>
                            <h3 class="font-semibold text-pcu-navy text-lg mb-2">MU Global Booklet</h3>
                            <p class="text-sm text-gray-500 mb-5">Explore our international partnerships and programs.</p>
                            <span class="inline-flex items-center gap-2 px-5 py-2.5 bg-pcu-navy text-white text-sm font-medium rounded-full">
                                <i class="w-4 h-4" data-lucide="download"></i> Download PDF
                            </span>
                        </a>

                    </div>
                </div>
            </section>

        </div>
    `;
}
