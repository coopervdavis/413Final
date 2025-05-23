using System.ComponentModel.DataAnnotations;

namespace _413Final.API.Data;

public class Entertainer
{
    [Key]
    public int EntertainerID { get; set; }
    public string? EntStageName { get; set; }
    public string? EntSSN { get; set; }
    public string? EntStreetAddress { get; set; }
    public string? EntCity { get; set; }
    public string? EntState { get; set; }
    public string? EntZipCode { get; set; }
    public string? EntPhoneNumber { get; set; }
    public string? EntWebPage { get; set; }
    public string? EntEMailAddress { get; set; }
    public string? DateEntered { get; set; } // You may want to convert this to DateTime if you control the format
}