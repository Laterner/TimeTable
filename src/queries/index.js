import { api } from '@api';
import { useQuery, UseQueryResult } from 'react-query';

// const GroupsPayload = {
//     items: {
//         id: number,
//         name: string,
//         faculty: string,
//     }[items]
// };

// export const useGroups =  (() => //UseQueryResult<GroupsPayload, Error>
//     useQuery<GroupsPayload, Error>('groups', () =>
//         api.get<GroupsPayload>('group')
// ));

// export const ScheduleItem = {
//   id: number,
//   start: string,
//   end: string,
//   subject: string,
//   desc: string,
//   lecturerFirstName: string,
//   lecturerLastName: string,
//   lecturerPatronymic: string,
//   week: number
// };

// const ScheduleWeek = {
//   [day, string]: ScheduleItem
// };

// export const SchedulePayload =
//    {
//       odd: ScheduleWeek,
//       even: ScheduleWeek,
//       faculty: string,
//     };

// export const useSchedule = (params => {
//   id = number,
//   filter = string
// }) 
// // () => UseQueryResult<SchedulePayload, Error> =>
// //   useQuery<SchedulePayload, Error>(
// //     ['schedule', params],
// //     () =>
// //       api.get<SchedulePayload>(`schedule/${params.id}`, {
// //         searchParams: params.filter && { filter: params.filter },
// //       }),
// //     {
// //       enabled: !!params.id,
// //     }
//   );
