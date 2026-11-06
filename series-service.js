//my work
//A1
export function getEpisodeTitle(show, seasonIndex, episodeIndex)
    {
      return show.seasons[seasonIndex].episodes[episodeIndex].title;
    }
//A2
export function getLastSeasonNumber(show)
{
    return show?.seasons[show.seasons.length-1]?.number??0
}
//A3
export function getNextSeasonYear(show)
{
    return show?.nextSeason?.year??"No announcement";
}
//B1
export function getById(series, id)
{
    return series.find(show=>show.id===id);
}
//B2
export const getSeasonsCount = series =>
  series.map(show => ({
    title: show.title,
    seasons: show.seasons.length
  }));
//B3
export const hasTopEpisode = (show, minRating) =>
  show.seasons.some(season =>
    season.episodes.some(episode => episode.rating >= minRating)
  );
//B4
export const getCreatorsFrom = (series, country) =>
  series
    .filter(show => show.creator.country === country)
    .map(show => show.creator.name);
//B5
export const sortByStartYear = series =>
  [...series].sort((a, b) => a.startYear - b.startYear);