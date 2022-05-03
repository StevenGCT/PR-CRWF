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
    getTitleFundingByUserId: "SELECT F.Title FROM Funding F INNER JOIN User_Funding UE ON F.IdFunding = UE.idFunding WHERE UE.idUser = @id",
    getCountDonateByUserId: "SELECT COUNT(*) FROM Donations D INNER JOIN Users U ON D.IdUser = U.IdUser WHERE U.idUser = @id",
    getTitleOfFundingDonateByUserId: "SELECT F.Title FROM Donations D INNER JOIN Users U ON D.IdUser = U.IdUser INNER JOIN Funding F ON D.IdFunding = f.IdFunding WHERE U.idUser = @id",
}