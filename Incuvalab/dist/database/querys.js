"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllCategory: "SELECT * FROM Category",
  createNewCategory: "INSERT INTO Category VALUES(@category)",
  getCategoryById: "SELECT * FROM Category WHERE IdCategory = @id",
  deleteCategoryById: "DELETE FROM Category WHERE IdCategory = @id",
  getCountCategory: "SELECT COUNT(*) FROM Category",
  updateCategoryById: "Update Category SET CategoryName = @category WHERE IdCategory = @id",
  rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC",
  createNewUser: "INSERT INTO Users ([Name] ,LastName, Email, [Password], UserName) VALUES (@name, @lastName, @email, HashBytes('MD5', @password), @username)",
  getUserById: "SELECT * FROM Users WHERE IdUser = @id",
  getLoginUser: "SELECT IdUser, UserName FROM Users WHERE Email = @email AND [Password]= HashBytes('MD5',@password)",
  deleteUserById: "DELETE FROM Users WHERE IdUser = @id",
  updateUserById: "UPDATE Users SET Name = @name, Email = @userEmail, PhoneNumber = @userPhoneNumber, LastName = @userLastname, SecondLastName = @userSecondName, UserName = @username, Address = @addressName WHERE IdUser = @id",
  getFundingById: "SELECT Title,Question1,Question2,Question3,FastDescription,Description,FundingImage1,FundingImage2,FundingImage3,FundingVideo,SocialMedia,RegisterDate,C.CategoryName,Goal,CurrentGoal FROM Funding F INNER JOIN Category C ON C.IdCategory = F.IdFunding WHERE IdFunding = @id",
  getComments: "SELECT C.IdComment, CONCAT(U.Name, ' ', U.LastName) AS Name, C.Comment, C.RegisterDate FROM Comments C INNER JOIN Users U ON U.IdUser = C.IdUser WHERE C.IdFunding = @idFunding",
  createNewComment: "INSERT INTO Comments(IdFunding, IdUser, Comment) VALUES (@idFunding , @idUser, @comment)",
  deleteCommentById: "DELETE FROM Comments WHERE IdComment = @idComment"
};
exports.queries = queries;