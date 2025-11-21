import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AvisoLegalPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-6 md:px-12 py-20 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-light text-[#222222] mb-12">Legal Notice</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-[#222222] mb-4">1. Identifying Data</h2>
              <p className="text-[#666666] leading-relaxed">
                In compliance with article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic
                Commerce, the owner of this website is:
              </p>
              <ul className="list-disc list-inside text-[#666666] leading-relaxed space-y-2 mt-4">
                <li>Name: Hervin Creative Studio</li>
                <li>Tax ID: B12345678</li>
                <li>Address: Example Street, 123, 28001 Madrid, Spain</li>
                <li>Email: legal@hervin.com</li>
                <li>Phone: +34 123 456 789</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#222222] mb-4">2. Purpose</h2>
              <p className="text-[#666666] leading-relaxed">
                This legal notice regulates the use of the website hervin.com, owned by Hervin Creative Studio.
                Navigation on the website grants the user status and implies full acceptance of all provisions included
                in this Legal Notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#222222] mb-4">3. Intellectual and Industrial Property</h2>
              <p className="text-[#666666] leading-relaxed">
                All contents of the website, including without limitation, texts, photographs, graphics, images, icons,
                technology, software, as well as its graphic design and source codes, constitute a work whose property
                belongs to Hervin Creative Studio, without being understood as assigned to the user any of the
                exploitation rights over them beyond what is strictly necessary for the correct use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#222222] mb-4">4. Responsibility</h2>
              <p className="text-[#666666] leading-relaxed">
                Hervin Creative Studio is not responsible for damages of any nature that may arise from the lack of
                availability or continuity of the operation of the website and the services enabled therein, as well as
                errors in accessing the different web pages or those from which the services are provided.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#222222] mb-4">5. Data Protection</h2>
              <p className="text-[#666666] leading-relaxed">
                Hervin Creative Studio complies with the guidelines of current regulations on the protection of personal
                data, the GDPR (Regulation (EU) 2016/679) and the LOPDGDD (Organic Law 3/2018, of December 5). Personal
                data collected through the website will be treated confidentially.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#222222] mb-4">6. Applicable Legislation</h2>
              <p className="text-[#666666] leading-relaxed">
                These General Conditions are governed by Spanish legislation. For the resolution of any conflict that
                may arise on the occasion of visiting the website or using the services that may be offered therein,
                Hervin Creative Studio and the user agree to submit to the Judges and Courts of the user's domicile.
              </p>
            </section>

            <p className="text-sm text-[#666666] pt-8 border-t border-[#e0e0e0]">Last updated: January 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
