// JS/pages/life at pcu/visa-immigration.js
function renderVisaImmigration() {
    return `
        <div class="page" id="page-visa-immigration">
            <div class="min-h-screen bg-transparent" style="padding-top: 80px;">

                <!-- Hero Section -->
                <div class="relative overflow-hidden bg-gradient-to-r from-pcu-green to-emerald-500 py-20">
                    <div class="absolute inset-0">
                        <img alt="Life at MU" class="w-full h-full object-cover opacity-60"
                             src="https://picsum.photos/seed/mu-visa-hero/1400/600"
                             style="object-position: center 50%;"/>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-r from-pcu-green/80 to-emerald-500/80"></div>
                    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
                        <a class="inline-flex items-center gap-1 text-white/70 text-sm mb-6 hover:text-white transition"
                           href="#" onclick="navigateTo('home');return false">
                            <i class="w-4 h-4" data-lucide="arrow-left"></i> Back to Home
                        </a>
                        <h1 class="font-display text-4xl md:text-5xl font-bold text-white mb-4">Visa &amp; Immigration</h1>
                        <p class="text-white/75 text-lg max-w-3xl">Essential information about visa requirements and immigration procedures for international students studying at Meridian University in the United States.</p>
                    </div>
                </div>

                <!-- Content Section -->
                <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div class="grid lg:grid-cols-2 gap-10 mb-16">

                        <!-- Left Column -->
                        <div class="space-y-6">
                            <div class="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                                <h2 class="font-semibold text-pcu-green text-2xl mb-4">Student Visa Types</h2>
                                <div class="space-y-4">
                                    <div class="border-l-4 border-pcu-green pl-4">
                                        <h3 class="font-semibold text-pcu-green mb-2">F-1 Student Visa</h3>
                                        <p class="text-gray-600">Primary visa for full-degree international students enrolled at MU. Valid for the duration of your academic program.</p>
                                    </div>
                                    <div class="border-l-4 border-pcu-gold pl-4">
                                        <h3 class="font-semibold text-pcu-green mb-2">J-1 Exchange Visitor Visa</h3>
                                        <p class="text-gray-600">For participants in exchange programs, research, or cultural activities. Duration tied to the program period.</p>
                                    </div>
                                    <div class="border-l-4 border-green-500 pl-4">
                                        <h3 class="font-semibold text-pcu-green mb-2">B-1/B-2 Visitor Visa</h3>
                                        <p class="text-gray-600">For short-term academic visits or prospective student consultations. Not valid for enrolled study.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                                <h2 class="font-semibold text-pcu-green text-2xl mb-4">Required Documents</h2>
                                <ul class="space-y-3 text-gray-600">
                                    <li class="flex gap-3"><i class="w-5 h-5 text-pcu-green mt-1" data-lucide="check-circle"></i> Valid passport (minimum 6 months validity)</li>
                                    <li class="flex gap-3"><i class="w-5 h-5 text-pcu-green mt-1" data-lucide="check-circle"></i> MU acceptance letter and Form I-20 (F-1) or DS-2019 (J-1)</li>
                                    <li class="flex gap-3"><i class="w-5 h-5 text-pcu-green mt-1" data-lucide="check-circle"></i> Health insurance certificate</li>
                                    <li class="flex gap-3"><i class="w-5 h-5 text-pcu-green mt-1" data-lucide="check-circle"></i> Financial proof (bank statements, sponsorship letter)</li>
                                    <li class="flex gap-3"><i class="w-5 h-5 text-pcu-green mt-1" data-lucide="check-circle"></i> Police clearance certificate</li>
                                    <li class="flex gap-3"><i class="w-5 h-5 text-pcu-green mt-1" data-lucide="check-circle"></i> Medical certificate</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Right Column -->
                        <div class="space-y-6">
                            <div class="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                                <h2 class="font-semibold text-pcu-green text-2xl mb-4">Application Process</h2>
                                <div class="space-y-4">
                                    <div class="flex gap-4">
                                        <div class="w-8 h-8 rounded-full bg-pcu-green text-white flex items-center justify-center font-bold text-sm">1</div>
                                        <div>
                                            <h3 class="font-semibold text-pcu-green mb-1">Apply to MU</h3>
                                            <p class="text-gray-600 text-sm">Receive official acceptance letter and Form I-20 or DS-2019 from Meridian University.</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-4">
                                        <div class="w-8 h-8 rounded-full bg-pcu-green text-white flex items-center justify-center font-bold text-sm">2</div>
                                        <div>
                                            <h3 class="font-semibold text-pcu-green mb-1">Prepare Documents</h3>
                                            <p class="text-gray-600 text-sm">Gather all required documents and have them legalized if necessary.</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-4">
                                        <div class="w-8 h-8 rounded-full bg-pcu-green text-white flex items-center justify-center font-bold text-sm">3</div>
                                        <div>
                                            <h3 class="font-semibold text-pcu-green mb-1">Apply for Visa</h3>
                                            <p class="text-gray-600 text-sm">Submit visa application at the US embassy or consulate in your country.</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-4">
                                        <div class="w-8 h-8 rounded-full bg-pcu-green text-white flex items-center justify-center font-bold text-sm">4</div>
                                        <div>
                                            <h3 class="font-semibold text-pcu-green mb-1">Immigration on Arrival</h3>
                                            <p class="text-gray-600 text-sm">Complete immigration procedures at the airport and register with local immigration office.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-pcu-light rounded-3xl border border-gray-100 p-8 shadow-sm">
                                <h2 class="font-semibold text-pcu-green text-2xl mb-4">Important Information</h2>
                                <div class="space-y-3 text-gray-600">
                                    <p><strong class="text-pcu-green">Processing Time:</strong> US visa applications typically take 2-8 weeks. Apply well in advance of your program start date.</p>
                                    <p><strong class="text-pcu-green">Visa Fee:</strong> SEVIS fee ($350 for F-1, $220 for J-1) plus embassy interview fee. Varies by nationality.</p>
                                    <p><strong class="text-pcu-green">Health Insurance:</strong> Mandatory for all international students at MU. Must cover at least $100,000 for medical expenses.</p>
                                    <p><strong class="text-pcu-green">SEVIS Registration:</strong> Register in SEVIS within 30 days of arrival and attend mandatory international student orientation.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- CTA -->
                    <div class="bg-gradient-to-r from-pcu-green to-emerald-500 rounded-3xl p-10 text-white text-center">
                        <i class="w-12 h-12 mx-auto mb-4 text-white/80" data-lucide="shield"></i>
                        <h3 class="font-display text-2xl font-bold mb-3">Need Help with Your Visa?</h3>
                        <p class="text-white/80 mb-6 max-w-2xl mx-auto">The International Office at Meridian University provides guidance and support for visa applications and immigration procedures. Contact us for assistance.</p>
                        <a class="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-pcu-green font-semibold rounded-full hover:bg-pcu-light transition shadow-lg"
                           href="mailto:io@meridian.edu">
                            <i class="w-4 h-4" data-lucide="mail"></i> Contact International Office
                        </a>
                    </div>

                </div>

            </div>
        </div>
    `;
}
