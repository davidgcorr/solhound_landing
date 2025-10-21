import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-10">
      <div className="bg-transparent rounded-2xl">
          <div className="flex justify-center">
            <Link href="#" className="flex font-bold items-center">
              <h3 className="text-md">© Solhound.app, 2025</h3>
            </Link>
          </div>
        </div>
    </footer>
  );
};
