export const queries = {
    getAllCategory: "SELECT * FROM Category",
    createNewCategory: "INSERT INTO Category VALUES(@category)",
    getCategoryById: "SELECT * FROM Category WHERE IdCategory = @id",
    deleteCategoryById: "DELETE FROM Category WHERE IdCategory = @id",
    getCountCategory: "SELECT COUNT(*) FROM Category",
    updateCategoryById: "Update Category SET CategoryName = @category WHERE IdCategory = @id",
    rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC"
}

export const fundqueries = {
    getAllFunding: "SELECT * FROM Funding",
    createNewFunding: "INSERT INTO Funding VALUES(@funding)",
    getFundingById: "SELECT * FROM Funding WHERE IdFunding = @id",
    deleteFundingById: "DELETE FROM Funding WHERE IdFunding = @id",
    getCountFunding: "SELECT COUNT(*) FROM Funding",
    updateCategoryById: "UPDATE FUNDING SET Description = @funding WHERE IdCategory = @id",
    rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC"
}