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
      studySets {
        nextToken
        __typename
      }
      posts {
        nextToken
        __typename
      }
      postComments {
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
      text
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
        text
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
        text
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
      text
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
        text
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
        text
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
        text
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
      text
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
        text
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
        text
        createdAt
        updatedAt
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
      book
      chapter
      verse
      note
      text
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
        book
        chapter
        verse
        note
        text
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
        book
        chapter
        verse
        note
        text
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
      content
      verseRef
      mediaUrl
      likes
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        owner
        content
        verseRef
        mediaUrl
        likes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByUserIdAndCreatedAt = /* GraphQL */ `
  query PostsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserIdAndCreatedAt(
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
        content
        verseRef
        mediaUrl
        likes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPostComment = /* GraphQL */ `
  query GetPostComment($id: ID!) {
    getPostComment(id: $id) {
      id
      postId
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
      content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPostComments = /* GraphQL */ `
  query ListPostComments(
    $filter: ModelPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postId
        userId
        owner
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postCommentsByPostIdAndCreatedAt = /* GraphQL */ `
  query PostCommentsByPostIdAndCreatedAt(
    $postId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postCommentsByPostIdAndCreatedAt(
      postId: $postId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        userId
        owner
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postCommentsByUserIdAndCreatedAt = /* GraphQL */ `
  query PostCommentsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postCommentsByUserIdAndCreatedAt(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postId
        userId
        owner
        content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFriendship = /* GraphQL */ `
  query GetFriendship($id: ID!) {
    getFriendship(id: $id) {
      id
      userId
      owner
      friendId
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFriendships = /* GraphQL */ `
  query ListFriendships(
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        owner
        friendId
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const friendshipsByUserIdAndCreatedAt = /* GraphQL */ `
  query FriendshipsByUserIdAndCreatedAt(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFriendshipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    friendshipsByUserIdAndCreatedAt(
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
        friendId
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSharedStudySet = /* GraphQL */ `
  query GetSharedStudySet($id: ID!) {
    getSharedStudySet(id: $id) {
      id
      studySetId
      sharedWithUserId
      owner
      permissions
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSharedStudySets = /* GraphQL */ `
  query ListSharedStudySets(
    $filter: ModelSharedStudySetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSharedStudySets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studySetId
        sharedWithUserId
        owner
        permissions
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const sharedStudySetsByStudySetIdAndSharedWithUserId = /* GraphQL */ `
  query SharedStudySetsByStudySetIdAndSharedWithUserId(
    $studySetId: ID!
    $sharedWithUserId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSharedStudySetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sharedStudySetsByStudySetIdAndSharedWithUserId(
      studySetId: $studySetId
      sharedWithUserId: $sharedWithUserId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studySetId
        sharedWithUserId
        owner
        permissions
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
