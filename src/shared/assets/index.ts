/** Все фото проекта лежат здесь, в shared/assets. Чтобы заменить фото — подмени файл или импорт. */
import team1 from './team-1.webp'
import team2 from './team-2.webp'
import team3 from './team-3.webp'
import team4 from './team-4.webp'
import team5 from './team-5.webp'
import team6 from './team-6.webp'
import person7 from './person-7.webp'
import women from './office-women.webp'
import meeting from './office-meeting.webp'
import boardroom from './office-boardroom.webp'
import standing from './office-standing.webp'
import discussion from './office-discussion.webp'

export const img = {
  hero: discussion,
  wide: boardroom,
  careers: meeting,
  collage: [boardroom, meeting, standing],
  service: [women, discussion, meeting, standing, boardroom],
  team: [team1, team2, team3, team4, team5, team6],
  blog: [women, discussion, boardroom, meeting, standing, women, discussion, boardroom, meeting],
  avatars: [team4, team5, person7],
}
