"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

// #6096B4, #93BFCF, #BDCDD6, #EEE9DA

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pt-16 md:pt-28 pb-5 md:pb-5">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2 bg-white dark:bg-primary/80">
          <a href="mailto:davidgcair@gmail.com">
            <span className="mr-2 text-primary">
              <Badge>Solana</Badge>
            </span>
            <span className="font-bold"> Security <span className="italic font-normal"> on-chain </span>AI Agent</span>
          </a>
          </Badge>

          <div className="max-w-screen-2xl w-full mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              <span className="text-transparent bg-gradient-to-r from-[#6096B4] to-[#5f5f5f] bg-clip-text mr-2">Solhound</span>
              is an <span className="text-transparent bg-gradient-to-r from-[#6096B4] to-[#5f5f5f] bg-clip-text mr-1">AI Agent </span> that protects your transactions
            </h1>              
          </div>
          <div className="max-w-screen-2xl w-full mx-auto text-center text-primary text-2xl md:text-4xl font-bold">
            <h1>
              <span className="inline-flex items-center">
                on the 
                <span className="text-transparent bg-gradient-to-r from-[#6096B4] to-[#5f5f5f] bg-clip-text inline-flex items-center mr-2">
                  <Image 
                    src="/solana-sol-logo.svg" 
                    alt="Solana" 
                    width={40} 
                    height={40} 
                    className="mx-2"
                  />
                  Solana
                </span> blockchain.
              </span>
            </h1>              
          </div>
          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground dark:text-white">
            {`Solhound is an AI-powered security agent that analyzes with AI your Solana transactions in real-time, identifying potential scams, false tokens, and malicious actors before they can affect you.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <a href="mailto:davidgcair@gmail.com">
              Contact Us
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <a href="mailto:davidgcair@gmail.com">Join our Waiting list</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
