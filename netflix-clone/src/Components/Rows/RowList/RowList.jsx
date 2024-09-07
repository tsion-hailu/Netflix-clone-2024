import React from 'react'
import Row from "../Row/Row"
import requests from '../../../utils/requests';

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fecthActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fecthComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fecthHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fecthRomanceMovies} />
      <Row title="Documentery Movies" fetchUrl={requests.fecthDocumentaries} />
      <Row title="Tv Show" fetchUrl={requests.fecthTvShow} />
    </>
  );
}

export default RowList