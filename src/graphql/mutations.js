/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      owner
      email
      firstName
      lastName
      birthday
      photoPath
      bio
      xP
      highlights {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      readingProgress {
        id
        userId
        owner
        lastBook
        lastChapter
        lastVerse
        streakDays
        lastReadDate
        updatedAt
        createdAt
        __typename
      }
      studySets {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      owner
      email
      firstName
      lastName
      birthday
      photoPath
      bio
      xP
      highlights {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      readingProgress {
        id
        userId
        owner
        lastBook
        lastChapter
        lastVerse
        streakDays
        lastReadDate
        updatedAt
        createdAt
        __typename
      }
      studySets {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      owner
      email
      firstName
      lastName
      birthday
      photoPath
      bio
      xP
      highlights {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      bookmarks {
        nextToken
        __typename
      }
      readingProgress {
        id
        userId
        owner
        lastBook
        lastChapter
        lastVerse
        streakDays
        lastReadDate
        updatedAt
        createdAt
        __typename
      }
      studySets {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHighlight = /* GraphQL */ `
  mutation CreateHighlight(
    $input: CreateHighlightInput!
    $condition: ModelHighlightConditionInput
  ) {
    createHighlight(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      book
      chapter
      verse
      color
      note
      tag
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHighlight = /* GraphQL */ `
  mutation UpdateHighlight(
    $input: UpdateHighlightInput!
    $condition: ModelHighlightConditionInput
  ) {
    updateHighlight(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      book
      chapter
      verse
      color
      note
      tag
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHighlight = /* GraphQL */ `
  mutation DeleteHighlight(
    $input: DeleteHighlightInput!
    $condition: ModelHighlightConditionInput
  ) {
    deleteHighlight(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      book
      chapter
      verse
      color
      note
      tag
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      userId
      owner
      verseKey
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      book
      chapter
      verse
      title
      body
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      userId
      owner
      verseKey
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      book
      chapter
      verse
      title
      body
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      userId
      owner
      verseKey
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      book
      chapter
      verse
      title
      body
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBookmark = /* GraphQL */ `
  mutation CreateBookmark(
    $input: CreateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    createBookmark(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      book
      chapter
      verse
      label
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBookmark = /* GraphQL */ `
  mutation UpdateBookmark(
    $input: UpdateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    updateBookmark(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      book
      chapter
      verse
      label
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBookmark = /* GraphQL */ `
  mutation DeleteBookmark(
    $input: DeleteBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    deleteBookmark(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      book
      chapter
      verse
      label
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReadingProgress = /* GraphQL */ `
  mutation CreateReadingProgress(
    $input: CreateReadingProgressInput!
    $condition: ModelReadingProgressConditionInput
  ) {
    createReadingProgress(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      lastBook
      lastChapter
      lastVerse
      streakDays
      lastReadDate
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const updateReadingProgress = /* GraphQL */ `
  mutation UpdateReadingProgress(
    $input: UpdateReadingProgressInput!
    $condition: ModelReadingProgressConditionInput
  ) {
    updateReadingProgress(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      lastBook
      lastChapter
      lastVerse
      streakDays
      lastReadDate
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const deleteReadingProgress = /* GraphQL */ `
  mutation DeleteReadingProgress(
    $input: DeleteReadingProgressInput!
    $condition: ModelReadingProgressConditionInput
  ) {
    deleteReadingProgress(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      lastBook
      lastChapter
      lastVerse
      streakDays
      lastReadDate
      updatedAt
      createdAt
      __typename
    }
  }
`;
export const createStudySet = /* GraphQL */ `
  mutation CreateStudySet(
    $input: CreateStudySetInput!
    $condition: ModelStudySetConditionInput
  ) {
    createStudySet(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      title
      description
      color
      verses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudySet = /* GraphQL */ `
  mutation UpdateStudySet(
    $input: UpdateStudySetInput!
    $condition: ModelStudySetConditionInput
  ) {
    updateStudySet(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      title
      description
      color
      verses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudySet = /* GraphQL */ `
  mutation DeleteStudySet(
    $input: DeleteStudySetInput!
    $condition: ModelStudySetConditionInput
  ) {
    deleteStudySet(input: $input, condition: $condition) {
      id
      userId
      owner
      user {
        id
        owner
        email
        firstName
        lastName
        birthday
        photoPath
        bio
        xP
        createdAt
        updatedAt
        __typename
      }
      title
      description
      color
      verses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStudySetVerse = /* GraphQL */ `
  mutation CreateStudySetVerse(
    $input: CreateStudySetVerseInput!
    $condition: ModelStudySetVerseConditionInput
  ) {
    createStudySetVerse(input: $input, condition: $condition) {
      id
      studySetId
      studySetOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudySetVerse = /* GraphQL */ `
  mutation UpdateStudySetVerse(
    $input: UpdateStudySetVerseInput!
    $condition: ModelStudySetVerseConditionInput
  ) {
    updateStudySetVerse(input: $input, condition: $condition) {
      id
      studySetId
      studySetOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudySetVerse = /* GraphQL */ `
  mutation DeleteStudySetVerse(
    $input: DeleteStudySetVerseInput!
    $condition: ModelStudySetVerseConditionInput
  ) {
    deleteStudySetVerse(input: $input, condition: $condition) {
      id
      studySetId
      studySetOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
