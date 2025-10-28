/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getHighlight = /* GraphQL */ `
  query GetHighlight($id: ID!) {
    getHighlight(id: $id) {
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
export const listHighlights = /* GraphQL */ `
  query ListHighlights(
    $filter: ModelHighlightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHighlights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        owner
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
      nextToken
      __typename
    }
  }
`;
export const highlightsByUserIdAndCreatedAt = /* GraphQL */ `
  query HighlightsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHighlightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    highlightsByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        owner
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
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        owner
        verseKey
        book
        chapter
        verse
        title
        body
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByUserIdAndCreatedAt = /* GraphQL */ `
  query CommentsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        owner
        verseKey
        book
        chapter
        verse
        title
        body
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByVerseKeyAndCreatedAt = /* GraphQL */ `
  query CommentsByVerseKeyAndCreatedAt(
    $verseKey: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByVerseKeyAndCreatedAt(
      verseKey: $verseKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        owner
        verseKey
        book
        chapter
        verse
        title
        body
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookmark = /* GraphQL */ `
  query GetBookmark($id: ID!) {
    getBookmark(id: $id) {
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
export const listBookmarks = /* GraphQL */ `
  query ListBookmarks(
    $filter: ModelBookmarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        owner
        book
        chapter
        verse
        label
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookmarksByUserIdAndCreatedAt = /* GraphQL */ `
  query BookmarksByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookmarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookmarksByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        owner
        book
        chapter
        verse
        label
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReadingProgress = /* GraphQL */ `
  query GetReadingProgress($id: ID!) {
    getReadingProgress(id: $id) {
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
export const listReadingProgresses = /* GraphQL */ `
  query ListReadingProgresses(
    $filter: ModelReadingProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReadingProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const readingProgressesByUserId = /* GraphQL */ `
  query ReadingProgressesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReadingProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    readingProgressesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStudySet = /* GraphQL */ `
  query GetStudySet($id: ID!) {
    getStudySet(id: $id) {
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
export const listStudySets = /* GraphQL */ `
  query ListStudySets(
    $filter: ModelStudySetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudySets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        owner
        title
        description
        color
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const studySetsByUserIdAndCreatedAt = /* GraphQL */ `
  query StudySetsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStudySetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studySetsByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        owner
        title
        description
        color
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudySetVerse = /* GraphQL */ `
  query GetStudySetVerse($id: ID!) {
    getStudySetVerse(id: $id) {
      id
      studySetId
      studySetOwner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStudySetVerses = /* GraphQL */ `
  query ListStudySetVerses(
    $filter: ModelStudySetVerseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudySetVerses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studySetId
        studySetOwner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const studySetVersesByStudySetIdAndCreatedAt = /* GraphQL */ `
  query StudySetVersesByStudySetIdAndCreatedAt(
    $studySetId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStudySetVerseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studySetVersesByStudySetIdAndCreatedAt(
      studySetId: $studySetId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studySetId
        studySetOwner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
