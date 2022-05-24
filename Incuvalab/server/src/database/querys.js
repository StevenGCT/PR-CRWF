export const queries = {
    getAllCategory: "SELECT * FROM Category",
    createNewCategory: "INSERT INTO Category VALUES(@category)",
    getCategoryById: "SELECT * FROM Category WHERE IdCategory = @id",
    deleteCategoryById: "DELETE FROM Category WHERE IdCategory = @id",
    getCountCategory: "SELECT COUNT(*) FROM Category",
    updateCategoryById: "Update Category SET CategoryName = @category WHERE IdCategory = @id",
    rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC",

    //Profile View
    getAllUsers: "SELECT * FROM Users;",
    getUserById: "SELECT * FROM Users WHERE IdUser = @id",
    getCountFundingByUserId: "SELECT COUNT(*) FROM Funding F INNER JOIN User_Funding UE ON F.IdFunding = UE.idFunding WHERE UE.idUser = @id",
    getTitleFundingByUserId: "SELECT UE.idUser, F.Title FROM Funding F INNER JOIN User_Funding UE ON F.IdFunding = UE.idFunding WHERE UE.idUser = @id",
    getCountDonateByUserId: "SELECT COUNT(*) FROM Donations D INNER JOIN Users U ON D.IdUser = U.IdUser WHERE U.idUser = @id",
    getTitleOfFundingDonateByUserId: "SELECT U.IdUser, F.Title FROM Donations D INNER JOIN Users U ON D.IdUser = U.IdUser INNER JOIN Funding F ON D.IdFunding = f.IdFunding WHERE U.idUser = @id",
    changePassword: "Update Users SET Password = HASHBYTES('MD5', @newPassword) WHERE IdUser = @id",
    changeImageProfile: "UPDATE UI SET UI.UserImage = @newImageProfile FROM UserImage UI INNER JOIN Users U ON UI.IdImage = U.idUsersImage WHERE U.IdUser = @id",
    getTitleFollowedFundingByUserId: "SELECT U.IdUser, F.Title FROM Followed_Funding FD INNER JOIN Users U ON FD.IdUser = U.IdUser INNER JOIN Funding F ON FD.IdFunding = f.IdFunding WHERE U.idUser = @id",
    getCountFollowedFundingByUserId: "SELECT COUNT(*) FROM Followed_Funding FD INNER JOIN Users U ON FD.IdUser = U.IdUser WHERE U.idUser = @id",

    //funding
    createNewFunding: "INSERT INTO Funding(Title, Question1, Question2, Question3, FastDescription, Description, FundingImage1, FundingImage2, FundingImage3, FundingVideo, AccountNumber, SocialMedia, IdCategory, Goal) VALUES (@Title, @Question1, @Question2, @Question3, @FastDescription, @Description, @FundingImage1, @FundingImage2, @FundingImage3, @FundingVideo, @AccountNumber, @SocialMedia, @IdCategory, @Goal)",

    //User
    createNewUser: "INSERT INTO Users ([Name] ,LastName, Email, [Password], UserName) VALUES (@name, @lastName, @email, HashBytes('MD5', @password), @username)",
    getUserById: "SELECT * FROM Users WHERE IdUser = @id",
    getLoginUser: "SELECT IdUser, UserName FROM Users WHERE Email = @email AND [Password]= HashBytes('MD5',@password)",
    deleteUserById: "DELETE FROM Users WHERE IdUser = @id",
    updateUserById: "UPDATE Users SET Name = @name, Email = @userEmail, PhoneNumber = @userPhoneNumber, LastName = @userLastname, SecondLastName = @userSecondName, UserName = @username, Address = @addressName WHERE IdUser = @id",

    //Funding
    getFundingById: "SELECT IdFunding, Title,Question1,Question2,Question3,FastDescription,Description,FundingImage1,FundingImage2,FundingImage3,FundingVideo,SocialMedia,RegisterDate,C.CategoryName,Goal,CurrentGoal FROM Funding F INNER JOIN Category C ON C.IdCategory = F.IdFunding WHERE IdFunding = @id",
    
    //Comments
    getComments: "SELECT C.IdComment, CONCAT(U.Name, ' ', U.LastName) AS Name, C.Comment, C.RegisterDate FROM Comments C INNER JOIN Users U ON U.IdUser = C.IdUser WHERE C.IdFunding = @idFunding ORDER BY  C.RegisterDate DESC",
    createNewComment: "INSERT INTO Comments(IdFunding, IdUser, Comment) VALUES (@idFunding , @idUser, @comment)",
    deleteCommentById: "DELETE FROM Comments WHERE IdComment = @idComment"
}