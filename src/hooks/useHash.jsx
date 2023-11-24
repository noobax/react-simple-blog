import { useEffect } from "react";
import { useState } from "react";

export function useHash() {
  
  const [hash, setHash] = useState(location.hash)

  useEffect(() => {

    const handleHash = () => {
      setHash(location.hash)
    }

    window.addEventListener("hashchange", handleHash)

    return () => {
      window.removeEventListener("hashchange", handleHash)
    }

  }, [])

  const cleanHash = hash.replaceAll('#', '').toLowerCase();

  return [
    cleanHash.split(':')[0],
    cleanHash.split(':')[1]
  ]
}
