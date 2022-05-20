export const queries = {
    getAllCategory: "SELECT * FROM Category",
    createNewCategory: "INSERT INTO Category VALUES(@category)",
    getCategoryById: "SELECT * FROM Category WHERE IdCategory = @id",
    deleteCategoryById: "DELETE FROM Category WHERE IdCategory = @id",
    getCountCategory: "SELECT COUNT(*) FROM Category",
    updateCategoryById: "Update Category SET CategoryName = @category WHERE IdCategory = @id",
    rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC",
    Donations:"SELECT * FROM Donations INNER JOIN Funding ON Donations.IdDonation = Funding.IdFunding"
}