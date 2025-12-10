import React from "react";
import axios from "axios";

export const CSV_ROUTE = "/csv/";
export const DIST_ROUTE = "/dist/";

export const useHeaders = (filename = "wta_headers.json") => {
  const [headers, setHeaders] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!loading) {
      setLoading(true);
      axios
        .get(`${DIST_ROUTE}${filename}`)
        .then(({ data }) => {
          setHeaders(data);
          setLoading(false);
        })
        .catch(() => {
          setHeaders([]);
          console.log("Failed to fetch headers");
          setLoading(false);
        });
    }
  }, []);

  return { headers, loading };
};

export const useMatches = (files) => {
  if (!files || files.length === 0) {
    throw new Error("useMatches requires a non-empty array of filenames");
  }
  const [matches, setMatches] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getMatches = async () =>
    Promise.all(
      files.map((item) =>
        axios.get(`${CSV_ROUTE}${item}`).then(({ data }) => data)
      )
    );

  React.useEffect(() => {
    if (!loading) {
      setLoading(true);
      getMatches()
        .then(({ data }) => {
          setMatches(data.flat());
          setLoading(false);
        })
        .catch(() => {
          setMatches([]);
          console.log("Failed to fetch matches");
          setLoading(false);
        });
    }
  }, []);

  return { matches, loading };
};
