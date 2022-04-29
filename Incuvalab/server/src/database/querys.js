export const queries = {
    getAllCategory: "SELECT * FROM Category",
    createNewCategory: "INSERT INTO Category VALUES(@category)",
    getCategoryById: "SELECT * FROM Category WHERE IdCategory = @id",
    deleteCategoryById: "DELETE FROM Category WHERE IdCategory = @id",
    getCountCategory: "SELECT COUNT(*) FROM Category",
    updateCategoryById: "Update Category SET CategoryName = @category WHERE IdCategory = @id",
    rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC",

    createNewUser: "INSERT INTO Users ([Name] ,LastName, Email, [Password]) VALUES (@name, @lastName, @email, HashBytes('MD5', @password))",
    getUserById: "SELECT * FROM Users WHERE IdUser = @id",
    getLoginUser: "SELECT IdUser FROM Users WHERE Email = @email AND [Password]= HashBytes('MD5',@password)",
    deleteUserById: "DELETE FROM Users WHERE IdUser = @id",
    updateUserById: "UPDATE Users SET Name = @name, Email = @userEmail, PhoneNumber = @userPhoneNumber, LastName = @userLastname, SecondLastName = @userSecondName, UserName = @username, Address = @addressName WHERE IdUser = @id",

}


