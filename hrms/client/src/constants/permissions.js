export const LEAVE_VIEW_SELF = 'LEAVE_VIEW_SELF';
export const LEAVE_VIEW_DEPT = 'LEAVE_VIEW_DEPT';
export const LEAVE_VIEW_ALL = 'LEAVE_VIEW_ALL';
export const LEAVE_APPROVE = 'LEAVE_APPROVE';

export const ROLES_ASSIGN = 'ROLES_ASSIGN';

export const PERMISSIONS = [
  {
    modules: 'HISTORY',
    permissions: [
      {
        name: 'View Own Leave',
        code: LEAVE_VIEW_SELF,
      },
      {
        name: 'View Department Leave',
        code: LEAVE_VIEW_DEPT,
      },
      {
        name: 'View All Leave',
        code: LEAVE_VIEW_ALL,
      },
      {
        name: 'Approve Leave',
        code: LEAVE_APPROVE,
      },
    ],
  },
  {
    modules: 'Other',
    permissions: [
      {
        name: 'Assign roles',
        code: ROLES_ASSIGN,
      },
    ],
  },
];
