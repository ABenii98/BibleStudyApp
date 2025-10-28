/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateHighlight = /* GraphQL */ `
  subscription OnCreateHighlight(
    $filter: ModelSubscriptionHighlightFilterInput
    $owner: String
  ) {
    onCreateHighlight(filter: $filter, owner: $owner) {
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
export const onUpdateHighlight = /* GraphQL */ `
  subscription OnUpdateHighlight(
    $filter: ModelSubscriptionHighlightFilterInput
    $owner: String
  ) {
    onUpdateHighlight(filter: $filter, owner: $owner) {
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
export const onDeleteHighlight = /* GraphQL */ `
  subscription OnDeleteHighlight(
    $filter: ModelSubscriptionHighlightFilterInput
    $owner: String
  ) {
    onDeleteHighlight(filter: $filter, owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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
export const onCreateBookmark = /* GraphQL */ `
  subscription OnCreateBookmark(
    $filter: ModelSubscriptionBookmarkFilterInput
    $owner: String
  ) {
    onCreateBookmark(filter: $filter, owner: $owner) {
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
export const onUpdateBookmark = /* GraphQL */ `
  subscription OnUpdateBookmark(
    $filter: ModelSubscriptionBookmarkFilterInput
    $owner: String
  ) {
    onUpdateBookmark(filter: $filter, owner: $owner) {
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
export const onDeleteBookmark = /* GraphQL */ `
  subscription OnDeleteBookmark(
    $filter: ModelSubscriptionBookmarkFilterInput
    $owner: String
  ) {
    onDeleteBookmark(filter: $filter, owner: $owner) {
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
export const onCreateReadingProgress = /* GraphQL */ `
  subscription OnCreateReadingProgress(
    $filter: ModelSubscriptionReadingProgressFilterInput
    $owner: String
  ) {
    onCreateReadingProgress(filter: $filter, owner: $owner) {
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
export const onUpdateReadingProgress = /* GraphQL */ `
  subscription OnUpdateReadingProgress(
    $filter: ModelSubscriptionReadingProgressFilterInput
    $owner: String
  ) {
    onUpdateReadingProgress(filter: $filter, owner: $owner) {
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
export const onDeleteReadingProgress = /* GraphQL */ `
  subscription OnDeleteReadingProgress(
    $filter: ModelSubscriptionReadingProgressFilterInput
    $owner: String
  ) {
    onDeleteReadingProgress(filter: $filter, owner: $owner) {
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
export const onCreateStudySet = /* GraphQL */ `
  subscription OnCreateStudySet(
    $filter: ModelSubscriptionStudySetFilterInput
    $owner: String
  ) {
    onCreateStudySet(filter: $filter, owner: $owner) {
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
export const onUpdateStudySet = /* GraphQL */ `
  subscription OnUpdateStudySet(
    $filter: ModelSubscriptionStudySetFilterInput
    $owner: String
  ) {
    onUpdateStudySet(filter: $filter, owner: $owner) {
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
export const onDeleteStudySet = /* GraphQL */ `
  subscription OnDeleteStudySet(
    $filter: ModelSubscriptionStudySetFilterInput
    $owner: String
  ) {
    onDeleteStudySet(filter: $filter, owner: $owner) {
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
export const onCreateStudySetVerse = /* GraphQL */ `
  subscription OnCreateStudySetVerse(
    $filter: ModelSubscriptionStudySetVerseFilterInput
    $studySetOwner: String
  ) {
    onCreateStudySetVerse(filter: $filter, studySetOwner: $studySetOwner) {
      id
      studySetId
      studySetOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStudySetVerse = /* GraphQL */ `
  subscription OnUpdateStudySetVerse(
    $filter: ModelSubscriptionStudySetVerseFilterInput
    $studySetOwner: String
  ) {
    onUpdateStudySetVerse(filter: $filter, studySetOwner: $studySetOwner) {
      id
      studySetId
      studySetOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStudySetVerse = /* GraphQL */ `
  subscription OnDeleteStudySetVerse(
    $filter: ModelSubscriptionStudySetVerseFilterInput
    $studySetOwner: String
  ) {
    onDeleteStudySetVerse(filter: $filter, studySetOwner: $studySetOwner) {
      id
      studySetId
      studySetOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
