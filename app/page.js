import { Button } from "@/components/ui/button";
import Land from "@/components/Land";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-40">
        <Land />
      </div>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((statsData, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-600 mb-2">{statsData.value}</div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 mt-4">Everything you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {featuresData.map((feature, index) => {
              return (
                <Card key={index} className="p-6">
                  <CardContent className="space-y-4 pt-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 mt-4">Everything you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-center">
            {howItWorksData.map((step, index) => {
              return (
                <div key={index}>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 mt-4">What our users say</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {testimonialsData.map((testimonial, index) => {
              return (
                <Card key={index} className="p-6">
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                      <p className="text-gray-600">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section >

      <section className="py-2 bg-blue-600">
        <div className="container mx-auto px-4 p-10">
          <h2 className="text-3xl font-bold text-center text-white">Get Started Today</h2>
          <p className="text-center text-white mb-8 max-w-2xl mx-auto mt-6">Join now with 1000+ users and take control of your finances!</p>

          <Link href="/dashboard" className="flex justify-center">
            <Button size ="lg" className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce">
            Start free trial
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
