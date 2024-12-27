import React from "react";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "@/components/ui/LocaleSwitcherSelect";

const Navbar = () => {
  const locale = useLocale();

  return (
    <div>
      Navbar
      <br />
      <LocaleSwitcherSelect defaultValue={locale} label="Select a locale">
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
};

export default Navbar;
