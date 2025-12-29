import { useState, useMemo } from "react";
import { tests } from "../data/tests";

export function useTests() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return tests.filter(
      (test) =>
        test.test_name.toLowerCase().includes(query) ||
        (test.region && test.region.toLowerCase().includes(query)) ||
        test.purpose.toLowerCase().includes(query)
    );
  }, [search]);

  return { tests, filtered, search, setSearch, loading: false, error: null };
}
