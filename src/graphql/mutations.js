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
export const createHighlight = /* GraphQL */ `
  mutation CreateHighlight(
    $input: CreateHighlightInput!
    $condition: ModelHighlightConditionInput
  ) {
    createHighlight(input: $input, condition: $condition) {
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
export const deleteHighlight = /* GraphQL */ `
  mutation DeleteHighlight(
    $input: DeleteHighlightInput!
    $condition: ModelHighlightConditionInput
  ) {
    deleteHighlight(input: $input, condition: $condition) {
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
export const createBookmark = /* GraphQL */ `
  mutation CreateBookmark(
    $input: CreateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    createBookmark(input: $input, condition: $condition) {
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
export const deleteBookmark = /* GraphQL */ `
  mutation DeleteBookmark(
    $input: DeleteBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    deleteBookmark(input: $input, condition: $condition) {
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
export const updateStudySetVerse = /* GraphQL */ `
  mutation UpdateStudySetVerse(
    $input: UpdateStudySetVerseInput!
    $condition: ModelStudySetVerseConditionInput
  ) {
    updateStudySetVerse(input: $input, condition: $condition) {
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
export const deleteStudySetVerse = /* GraphQL */ `
  mutation DeleteStudySetVerse(
    $input: DeleteStudySetVerseInput!
    $condition: ModelStudySetVerseConditionInput
  ) {
    deleteStudySetVerse(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createPostComment = /* GraphQL */ `
  mutation CreatePostComment(
    $input: CreatePostCommentInput!
    $condition: ModelPostCommentConditionInput
  ) {
    createPostComment(input: $input, condition: $condition) {
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
export const updatePostComment = /* GraphQL */ `
  mutation UpdatePostComment(
    $input: UpdatePostCommentInput!
    $condition: ModelPostCommentConditionInput
  ) {
    updatePostComment(input: $input, condition: $condition) {
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
export const deletePostComment = /* GraphQL */ `
  mutation DeletePostComment(
    $input: DeletePostCommentInput!
    $condition: ModelPostCommentConditionInput
  ) {
    deletePostComment(input: $input, condition: $condition) {
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
export const createFriendship = /* GraphQL */ `
  mutation CreateFriendship(
    $input: CreateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    createFriendship(input: $input, condition: $condition) {
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
export const updateFriendship = /* GraphQL */ `
  mutation UpdateFriendship(
    $input: UpdateFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    updateFriendship(input: $input, condition: $condition) {
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
export const deleteFriendship = /* GraphQL */ `
  mutation DeleteFriendship(
    $input: DeleteFriendshipInput!
    $condition: ModelFriendshipConditionInput
  ) {
    deleteFriendship(input: $input, condition: $condition) {
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
export const createSharedStudySet = /* GraphQL */ `
  mutation CreateSharedStudySet(
    $input: CreateSharedStudySetInput!
    $condition: ModelSharedStudySetConditionInput
  ) {
    createSharedStudySet(input: $input, condition: $condition) {
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
export const updateSharedStudySet = /* GraphQL */ `
  mutation UpdateSharedStudySet(
    $input: UpdateSharedStudySetInput!
    $condition: ModelSharedStudySetConditionInput
  ) {
    updateSharedStudySet(input: $input, condition: $condition) {
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
export const deleteSharedStudySet = /* GraphQL */ `
  mutation DeleteSharedStudySet(
    $input: DeleteSharedStudySetInput!
    $condition: ModelSharedStudySetConditionInput
  ) {
    deleteSharedStudySet(input: $input, condition: $condition) {
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
