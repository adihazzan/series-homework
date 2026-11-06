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