export const queries = {
    getAllCategory: "SELECT * FROM Category",
    createNewCategory: "INSERT INTO Category (CategoryName, Description, ImageUrl, PublicIDImage) VALUES (@CategoryName, @Description,@ImageUrl,@PublicIDImage)",
    getCategoryById: "SELECT * FROM Category WHERE IdCategory = @id",
    deleteCategoryById: "DELETE FROM Category WHERE IdCategory = @id",
    getCountCategory: "SELECT COUNT(*) FROM Category",
    updateCategoryById: "UPDATE Category SET CategoryName = @CategoryName, Description = @Description, ImageUrl = @ImageUrl, PublicIDImage = @PublicIDImage WHERE IdCategory = @id",
    rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC",
    Donations:"SELECT * FROM Donations INNER JOIN Funding ON Donations.IdDonation = Funding.IdFunding",

    getRackFundingTop3: "SELECT  TOP (3) * FROM Funding a INNER JOIN (SELECT IdFunding, MAX(Goal) AS rev FROM Funding GROUP BY IdFunding) b ON a.IdFunding = b.IdFunding AND a.Goal = b.rev WHERE  State  = 1 AND Aprove = 1",
    
    //Profile View
    getAllUsers: "SELECT * FROM Users;",
    getUserById: "SELECT * FROM Users WHERE IdUser = @id",
    
   
    changePassword: " UPDATE Users  SET Password = HASHBYTES('MD5', @newPassword)  ,Email = @email WHERE IdUser = @id",

    changeImageProfile: "UPDATE UI SET UI.UserImage = @newImageProfile FROM UserImage UI INNER JOIN Users U ON UI.IdImage = U.idUsersImage WHERE U.IdUser = @id",
    
    
    getUserDonateFunding: "SELECT idUser FROM Funding F INNER JOIN User_Funding UF ON UF.idFunding = F.idFunding WHERE F.IdFunding = @idFunding",
    
    //User
    createNewUser: "INSERT INTO Users ([Name] ,LastName, Email, [Password], UserName) VALUES (@name, @lastName, @email, HashBytes('MD5', @password), @username)",
    getUserById: "SELECT U.IdUser,[Name],[Email],[PhoneNumber],[IdUserType],[LastName],[SecondLastName],U.RegisterDate,[UserName],[Address],[IdUsersImage] FROM Users U WHERE U.IdUser = @id GROUP BY U.IdUser,[Name],[Email],[PhoneNumber],[IdUserType],[LastName],[SecondLastName],U.RegisterDate,[UserName],[Address],[IdUsersImage]",

    createNewAdmin: "INSERT INTO Users ([Name], Email, [Password], PhoneNumber, IdUserType, LastName, SecondLastName, State, RegisterDate,UserName,Address) VALUES (@name, @email, HashBytes('MD5',@password), @phonenumber, 1, @lastname, @secondlastname, 1, CURRENT_TIMESTAMP, @username, @address)",

    getTitleFollowedFundingByUserId: "SELECT F.IdFunding , F.Title, F.FastDescription FROM Users U  LEFT JOIN Followed_Funding FF ON FF.IdUser = U.IdUser LEFT JOIN Funding F ON FF.IdFunding = F.IdFunding WHERE U.IdUser = @id GROUP BY FF.IdUser, F.IdFunding, F.Title, F.FastDescription",
    getTitleOfFundingDonateByUserId: "	SELECT F.IdFunding , F.Title, F.FastDescription FROM Users U  LEFT JOIN Donations D ON D.IdUser = U.IdUser  LEFT JOIN Funding F ON D.IdFunding = F.IdFunding WHERE U.IdUser = @id GROUP BY  D.IdUser, F.IdFunding, F.Title, F.FastDescription",
    getTitleFundingByUserId: "	SELECT F.IdFunding , F.Title, F.FastDescription FROM Users U  LEFT JOIN User_Funding UF ON UF.idUser = U.IdUser LEFT JOIN Funding F ON UF.IdFunding = F.IdFunding WHERE U.IdUser = @id GROUP BY UF.idUser, F.IdFunding, F.Title, F.FastDescription",
    

    getCountFollowedByUserId:"SELECT COUNT(FF.IdUser) AS 'countFollowedFunding' FROM Users U LEFT JOIN Followed_Funding FF ON FF.IdUser = U.IdUser WHERE U.IdUser = @id GROUP BY FF.IdUser",
    getCountDonationsByUserId:"SELECT COUNT(D.IdUser) AS 'countDonationsFunding' FROM Users U LEFT JOIN Donations D ON D.IdUser = U.IdUser WHERE U.IdUser = @id GROUP BY  D.IdUser",
    getCountFundingsCreateByUserId:"SELECT COUNT(UF.idUser) AS 'countCreateFunding' FROM Users U LEFT JOIN User_Funding UF ON UF.idUser = U.IdUser WHERE U.IdUser = @id  GROUP BY UF.idUser",

    getLoginUser: "SELECT IdUser, UserName FROM Users WHERE Email = @email AND [Password]= HashBytes('MD5',@password)",
    deleteUserById: "DELETE FROM Users WHERE IdUser = @id",
    updateUserById: "UPDATE Users SET [Name] = @name ,[PhoneNumber] = @phonenumber ,[LastName] = @lastname ,[SecondLastName] = @secondlastname ,[UserName] = @username ,[Address] = @address WHERE IdUser = @id",
    getUserCommandlist: "SELECT U.IdUser, U.Name , U.Email , U.PhoneNumber , UT.TypeUserName , U.LastName , U.SecondLastName , U.RegisterDate , U.LastUpdate , U.UserName , U.Address FROM Users U INNER JOIN UserType UT ON U.IdUserType = UT.IdUserType WHERE U.IdUserType = 1",

    //Comments
    getComments: "SELECT C.IdComment, CONCAT(U.Name, ' ', U.LastName) AS Name, C.Comment, C.RegisterDate FROM Comments C INNER JOIN Users U ON U.IdUser = C.IdUser WHERE C.IdFunding = @idFunding ORDER BY  C.RegisterDate DESC",
    createNewComment: "INSERT INTO Comments(IdFunding, IdUser, Comment) VALUES (@idFunding , @idUser, @comment)",
    deleteCommentById: "DELETE FROM Comments WHERE IdComment = @idComment",

    getTypeUserById: "SELECT TypeUserName FROM Users U INNER JOIN UserType UT ON UT.IdUserType = U.IdUserType WHERE U.IdUser = @id;",
    getExistEmailVerification: "SELECT COUNT(IdUser) AS email FROM  Users WHERE email LIKE CONCAT(@email, '%')",

    setPasswordUpdate: "UPDATE Users SET [Password] = HASHBYTES('MD5', @password) WHERE Email = @email"
}

export const fundqueries = {
    getAllFunding: "SELECT * FROM Funding WHERE State = 1 AND Aprove = 1",
    getCompleteFunding: "SELECT * FROM Funding WHERE CurrentGoal >= Goal AND State = 1 AND Aprove = 1",
    getAllNoAprobedFunding: "SELECT * FROM Funding WHERE State = 1 AND Aprove = 0",
    getDeletedFunding: "SELECT * FROM Funding WHERE State = 0",
    getAllFundingByCat: "SELECT * FROM Funding WHERE IdCategory = @id",
    getFundingByName: "SELECT * FROM Funding WHERE Title LIKE CONCAT('%',@search,'%') AND State  = 1 AND Aprove = 1",
    getFundingById: "SELECT IdFunding, Title,Question1,Question2,Question3,FastDescription,F.Description,FundingImage1,FundingImage2,FundingImage3,FundingVideo,SocialMedia,RegisterDate, f.IdCategory, C.CategoryName,Goal,CurrentGoal, AccountNumber FROM Funding F INNER JOIN Category C ON C.IdCategory = F.IdCategory WHERE IdFunding = @id",
    deleteFundingById: "DELETE FROM Funding WHERE IdFunding = @id",
    deleteFundingByLogical:"UPDATE Funding  SET State = 0 WHERE IdFunding  = @id",
    aproveFundingById:"UPDATE Funding  SET Aprove = 1 WHERE IdFunding  = @id",
    getCountFunding: "SELECT COUNT(*) FROM Funding",
    updateCategoryById: "UPDATE FUNDING SET Description = @funding WHERE IdCategory = @id",
    rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC",
    createNewFunding: "INSERT INTO Funding(Title, Question1, Question2, Question3, FastDescription, Description, FundingImage1, FundingImage2, FundingImage3, FundingVideo, AccountNumber, SocialMedia, IdCategory, Goal) VALUES (@Title, @Question1, @Question2, @Question3, @FastDescription, @Description, @FundingImage1, @FundingImage2, @FundingImage3, @FundingVideo, @AccountNumber, @SocialMedia, @IdCategory, @Goal)",
    restoreFunding:"UPDATE Funding  SET State = 1, Aprove = 0 WHERE IdFunding  = @id",
    updateFunding:"UPDATE Funding SET [Title] = @Title ,[Question1] = @Question1 ,[Question2] = @Question2 ,[Question3] = @Question3,[FastDescription] = @FastDescription,[Description] = @Description,[FundingImage1] = @FundingImage1,[FundingImage2] = @FundingImage2,[FundingImage3] = @FundingImage3,[FundingVideo] = @FundingVideo,[AccountNumber] = @AccountNumber,[SocialMedia] = @SocialMedia,[IdCategory] = @IdCategory,[Goal] = @Goal WHERE IdFunding = @Id"
}
export const qrqueris ={
    getAllQr: "SELECT * FROM QrConfig",
    getQrById: "SELECT * FROM QrConfig WHERE idQr = @id",
    deleteQrById:"DELETE FROM QrConfig WHERE idQr = @id",
    updateQrById:"UPDATE QrConfig SET PublicIDImage = @PublicIDImage, QrUrl = @QrUrl, mount = @Mount WHERE idQr = @id",
    createQr:"INSERT INTO QrConfig (PublicIDImage, QrUrl, mount) VALUES (@PublicIDImage, @QrUrl, @Mount);"
}
export const donationQuery ={
    getAllDonation: "SELECT * FROM Donations",
    getDonationyId: "SELECT * FROM Donations WHERE IdDonation = @id",
    deleteDonation:"DELETE FROM Donations WHERE IdDonation =@id",
    updateDonation:"UPDATE Donations SET Mount = @Mount, UpdateDate = CURRENT_TIMESTAMP, State =1, VoucherDocument = @VoucherDocument, PublicIDDocument = @PublicIDDocument  WHERE IdDonation =@id",
    createDonation:"INSERT INTO Donations (Mount, RegisterDate, IdUser, IdFunding, VoucherDocument, PublicIDDocument) VALUES (@Mount, CURRENT_TIMESTAMP, @IDUser, @IDFunding, @VoucherDocument, @PublicIDDocument)"
}