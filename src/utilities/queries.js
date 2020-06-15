export const GET_CURRENT_PODIUM = `
GetCurrentPodium {
  id
  title
  date
  file
}`;
export const GET_CURRENT_MEMBER = `
GetCurrentMember {
  id
  avatar
  email
  firstName
  lastName
  phone
  website
  membershipStatus
  memberDirectory
  publicDirectory
  plan
  renews
  invoices {
    title
    date
    amount
    status
  }
  address {
    city
    country
    state
    street1
    street2
    zip
  }
}
`;

export const GET_DIRECTORY_INFO = `
GetDirectoryInfo {
  email
  firstName
  lastName
  phone
  website
  memberDirectory
  publicDirectory
  musicStyles {
    code
    name
  }
  userInstruments {
   teach
   play
   instruments {
     code
     name
   }
  }
  address {
    city
    country
    state
    street1
    street2
    zip
  }
}
`;
export const GET_CURRENT_ACCOUNT = `
GetCurrentAccount {
  addresses {
    city
    country
    note
    state
    street1
    street2
    type
    zip
  }
  agreements
  contact
  dob
  emails {
    email
    type
  }
  userInstruments {
    play
    instruments {
      code
    }
  }
  firstName
  gender
  lastName
  middleName
  musicGroup
  phones {
    number
    type
  }
  membershipType
  professionalName
  school
  website
  workVisaType
}`;

export const GET_MEETINGS = `
GetMeetings {
  id
  title
  date
  time
  street
  city
  state
  zip
  rsvp
  link
  description
}`;

export const GET_FILTERS = `
GetFilters {
  instruments {
    name
    code
  }
  styles {
    name
    code
  }
}`;

export const GET_MEMBERS = `
GetMembers {
  id
  avatar
  bio
  email
  firstName
  lastName
  phone
  website
  address {
    city
    country
    state
    street1
    street2
    zip
  }
  userInstruments {
    instruments {
      code
      name
    }
    play
    teach
  }
  styles {
    code
    name
  }
}

`;

export const GET_CONTRACTS = `
GetContracts {
  id
  name
  items {
    id
    title
    description
    file
  }
}`;

export const GET_PODIUMS = `
GetPodiums {
    id
    title
    date
    file
}`;

export const GET_RESOURCES = `
GetResources {
  id
  name
  items {
    id
    title
    description
    file
    image
    link
  }
}`;
