using _413Final.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[Route("[controller]")]
[ApiController]
public class FinalController : ControllerBase
{
    private FinalDbContext _context;

    public FinalController(FinalDbContext temp)
    {
        _context = temp;
    }
    // all the enteratiners
    [HttpGet("BookingSummary")]
    public async Task<IActionResult> GetEntertainerBookingSummaries()
    {
        var result = await (from e in _context.Entertainers
                join g in _context.Engagements on e.EntertainerID equals g.EntertainerID into gj
                select new
                {
                    e.EntertainerID,
                    e.EntStageName,
                    BookingCount = gj.Count(),
                    LastBookedDate = gj
                        .OrderByDescending(x => x.EndDate)
                        .Select(x => x.EndDate)
                        .FirstOrDefault()
                })
            .ToListAsync();

        return Ok(result);
    }
// specific details about one entertainer
    [HttpGet("Details/{id}")]
    public async Task<IActionResult> GetEntertainerDetails(int id)
    {
        var entertainer = await _context.Entertainers.FindAsync(id);

        if (entertainer == null)
        {
            return NotFound(new { message = "Entertainer not found" });
        }

        return Ok(entertainer);
    }

    
    
    //
    // // CRUD
    // // ADD
    [HttpPost("Add")]
    public IActionResult AddEntertainer([FromBody] Entertainer newEntertainer)
    {
        _context.Entertainers.Add(newEntertainer);
        _context.SaveChanges();
        return Ok(newEntertainer);
    }

    
    // UPDATE 
    [HttpPut("Update/{id}")]
    public IActionResult UpdateEntertainer(int id, [FromBody] Entertainer updated)
    {
        var existing = _context.Entertainers.Find(id);
        if (existing == null)
        {
            return NotFound(new { message = "Entertainer not found" });
        }

        existing.EntStageName = updated.EntStageName;
        existing.EntSSN = updated.EntSSN;
        existing.EntStreetAddress = updated.EntStreetAddress;
        existing.EntCity = updated.EntCity;
        existing.EntState = updated.EntState;
        existing.EntZipCode = updated.EntZipCode;
        existing.EntPhoneNumber = updated.EntPhoneNumber;
        existing.EntWebPage = updated.EntWebPage;
        existing.EntEMailAddress = updated.EntEMailAddress;
        existing.DateEntered = updated.DateEntered;

        _context.Entertainers.Update(existing);
        _context.SaveChanges();

        return Ok(existing);
    }

    
    // DELETE
    [HttpDelete("Delete/{id}")]
    public IActionResult DeleteEntertainer(int id)
    {
        var entertainer = _context.Entertainers.Find(id);
        if (entertainer == null)
        {
            return NotFound(new { message = "Entertainer not found" });
        }

        _context.Entertainers.Remove(entertainer);
        _context.SaveChanges();

        return NoContent();
    }

    
    
    
}
