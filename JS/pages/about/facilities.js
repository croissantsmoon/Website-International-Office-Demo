// JS/pages/about/facilities.js
function renderFacilities() {
    return `
        <div class="page" id="page-facilities">
            <div class="min-h-screen bg-transparent" style="padding-top: 80px;">

                <!-- Hero Section -->
                <div class="bg-gradient-to-r from-[#0d2137] to-pcu-navy py-20"
                     style="background-image: linear-gradient(rgba(13,33,55,0.60), rgba(29,68,110,0.60)), url('https://picsum.photos/seed/mu-facilities-hero/1400/600'); background-size: cover; background-position: center; background-repeat: no-repeat;">
                    <div class="max-w-7xl mx-auto px-6 lg:px-8">
                        <a class="inline-flex items-center gap-1 text-white/70 text-sm mb-6 hover:text-white transition"
                           href="#" onclick="navigateTo('home');return false">
                            <i class="w-4 h-4" data-lucide="arrow-left"></i> Back to Home
                        </a>
                        <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">Facilities</h1>
                        <p class="text-white/75 text-lg max-w-3xl">Discover Meridian University's campus facilities designed to support academic excellence, student wellbeing, and international engagement.</p>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-12">

                    <!-- Facility Cards -->
                    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <a class="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm hover:border-pcu-blue transition"
                           href="#">
                            <div class="mb-6 overflow-hidden rounded-3xl bg-slate-50 h-40">
                                <img alt="Library" class="w-full h-full object-cover object-center" src="https://picsum.photos/seed/mu-library/400/200"/>
                            </div>
                            <h3 class="font-semibold text-pcu-blue text-xl mb-3">Library</h3>
                            <p class="text-gray-600 mb-6">Access one of the region's largest academic libraries with digital collections, e-resources, and modern study spaces.</p>
                            <span class="inline-flex items-center gap-2 text-pcu-blue font-semibold">Visit Library <i class="w-4 h-4" data-lucide="arrow-right"></i></span>
                        </a>

                        <a class="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm hover:border-pcu-blue transition"
                           href="#">
                            <div class="mb-6 overflow-hidden rounded-3xl bg-slate-50 h-40">
                                <img alt="Health Services" class="w-full h-full object-cover object-center" src="https://picsum.photos/seed/mu-health/400/200"/>
                            </div>
                            <h3 class="font-semibold text-pcu-blue text-xl mb-3">Health Services</h3>
                            <p class="text-gray-600 mb-6">MU Health Clinic offers general and specialist care with free and subsidized services for the campus community.</p>
                            <span class="inline-flex items-center gap-2 text-pcu-blue font-semibold">View Health Services <i class="w-4 h-4" data-lucide="arrow-right"></i></span>
                        </a>

                        <a class="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm hover:border-pcu-blue transition"
                           href="#">
                            <div class="mb-6 overflow-hidden rounded-3xl bg-slate-50 h-40">
                                <img alt="Innovation Hub" class="w-full h-full object-cover object-center" src="https://picsum.photos/seed/mu-innovation/400/200"/>
                            </div>
                            <h3 class="font-semibold text-pcu-blue text-xl mb-3">Innovation Hub</h3>
                            <p class="text-gray-600 mb-6">State-of-the-art IT services, maker spaces, and software support for learning, teaching, and research at MU.</p>
                            <span class="inline-flex items-center gap-2 text-pcu-blue font-semibold">Explore Hub <i class="w-4 h-4" data-lucide="arrow-right"></i></span>
                        </a>

                        <a class="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm hover:border-pcu-blue transition"
                           href="#">
                            <div class="mb-6 overflow-hidden rounded-3xl bg-slate-50 h-40">
                                <img alt="MU Career Center" class="w-full h-full object-cover object-center" src="https://picsum.photos/seed/mu-career/400/200"/>
                            </div>
                            <h3 class="font-semibold text-pcu-blue text-xl mb-3">MU Career Center</h3>
                            <p class="text-gray-600 mb-6">Supporting students and alumni with career preparation, recruitment events, and professional networking.</p>
                            <span class="inline-flex items-center gap-2 text-pcu-blue font-semibold">Open Career Center <i class="w-4 h-4" data-lucide="arrow-right"></i></span>
                        </a>
                    </div>

                    <!-- Student Services & Contact Support -->
                    <div class="grid gap-8 lg:grid-cols-2">
                        <div class="rounded-3xl bg-pcu-blue/10 border border-gray-100 p-8 shadow-sm">
                            <h3 class="font-semibold text-pcu-blue text-2xl mb-4">Student Services Office</h3>
                            <p class="text-gray-600 mb-4">The Student Services Office handles student administration, financial assistance, student organization support, and alumni records for all enrolled students at Meridian University.</p>
                            <a class="inline-flex items-center gap-2 text-pcu-blue font-semibold" href="#">
                                Visit Student Services <i class="w-4 h-4" data-lucide="arrow-right"></i>
                            </a>
                        </div>
                        <div class="rounded-3xl bg-pcu-blue/10 border border-gray-100 p-8 shadow-sm">
                            <h3 class="font-semibold text-pcu-blue text-2xl mb-4">Contact &amp; Support</h3>
                            <ul class="space-y-3 text-gray-600">
                                <li><span class="font-semibold text-pcu-blue">Library:</span> library@meridian.edu</li>
                                <li><span class="font-semibold text-pcu-blue">Health:</span> health@meridian.edu</li>
                                <li><span class="font-semibold text-pcu-blue">Career Center:</span> careers@meridian.edu</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Dining & Wellness -->
                    <div class="grid gap-8 lg:grid-cols-2">
                        <div class="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm">
                            <h3 class="font-semibold text-pcu-blue text-2xl mb-4">Campus Dining &amp; Stores</h3>
                            <p class="text-gray-600 mb-4">Enjoy campus dining options at multiple cafeterias and food courts, plus the MU Book Store and convenience outlets for student essentials.</p>
                            <p class="text-gray-600">Locations: Main Campus, North Campus, South Campus.</p>
                        </div>
                        <div class="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm">
                            <h3 class="font-semibold text-pcu-blue text-2xl mb-4">Wellness Center</h3>
                            <p class="text-gray-600 mb-4">MU Wellness Center provides mental health counseling, fitness programs, and community wellness services for students, faculty, and staff.</p>
                            <p class="text-gray-600">Learn more about campus wellness programs and community support.</p>
                        </div>
                    </div>

                    <!-- Facility Highlights -->
                    <div class="rounded-3xl border border-gray-100 bg-pcu-blue/10 p-8 shadow-sm">
                        <h2 class="font-display text-3xl text-pcu-blue mb-4">Facility Highlights</h2>
                        <p class="text-gray-600 mb-6">MU facilities deliver integrated academic, health, technology, and student life support for every student in our community.</p>
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div class="rounded-3xl bg-white p-5 border border-gray-100">
                                <p class="font-semibold text-pcu-blue">Extensive digital and physical library collections</p>
                            </div>
                            <div class="rounded-3xl bg-white p-5 border border-gray-100">
                                <p class="font-semibold text-pcu-blue">General and specialist health clinic services</p>
                            </div>
                            <div class="rounded-3xl bg-white p-5 border border-gray-100">
                                <p class="font-semibold text-pcu-blue">Innovation Hub with maker spaces and IT support</p>
                            </div>
                            <div class="rounded-3xl bg-white p-5 border border-gray-100">
                                <p class="font-semibold text-pcu-blue">Career guidance, alumni networks, and student administration</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;
}
