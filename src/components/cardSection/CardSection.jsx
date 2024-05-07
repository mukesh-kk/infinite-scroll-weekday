import { useState, useRef, useCallback } from "react";
import { Grid, CircularProgress, Box } from "@mui/material";

import useFetchSearch from "../../utils/hook";
import JobCard from "../card/Card";

function CardSections() {
  const [page, setPage] = useState(1);
  const { data, loading, hasMore } = useFetchSearch(null, page);
  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <Grid container spacing={3} justifyContent={"center"}>
        {data.map((item, index) => (
          <Grid
            key={item.id}
            ref={index + 1 === data.length ? lastBookElementRef : null}
            item
            xs={11}
            sm={6}
            md={4}
            lg={3}
          >
            <JobCard item={item}  />
          </Grid>
        ))}
        {loading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : null}
      </Grid>
    </div>
  );
}

export default CardSections;
