<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $input = json_decode(file_get_contents('php://input'), true);
    
    $firstName = $input['firstName'] ?? '';
    $lastName = $input['lastName'] ?? '';
    $email = $input['email'] ?? '';
    $company = $input['company'] ?? 'Not provided';
    $service = $input['service'] ?? 'General Inquiry';
    $message = $input['message'] ?? '';
    
    // Validate required fields
    if (empty($firstName) || empty($lastName) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Missing required fields']);
        exit;
    }
    
    // Email configuration
    $to = 'ukrush12@gmail.com';
    $subject = "BIZmaster Contact: $firstName $lastName - $service";
    
    $emailBody = "
BIZmaster Contact Form Submission
================================

Contact Details:
Name: $firstName $lastName
Email: $email
Company: $company
Service Interest: $service

Message:
$message

================================
Sent from: BIZmaster Website Contact Form
Date: " . date('Y-m-d H:i:s') . "

Please reply directly to: $email
    ";
    
    // Headers for HTML email
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: BIZmaster Contact Form <noreply@bizmaster.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // HTML email body
    $htmlBody = "
    <html>
    <head>
        <title>BIZmaster Contact Form</title>
    </head>
    <body style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;'>
        <h2 style='color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;'>
            BIZmaster Contact Form Submission
        </h2>
        
        <div style='background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;'>
            <h3 style='color: #1f2937; margin-top: 0;'>Contact Details:</h3>
            <p><strong>Name:</strong> $firstName $lastName</p>
            <p><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
            <p><strong>Company:</strong> $company</p>
            <p><strong>Service Interest:</strong> $service</p>
        </div>

        <div style='background-color: #ffffff; padding: 20px; border-left: 4px solid #7c3aed; margin: 20px 0;'>
            <h3 style='color: #1f2937; margin-top: 0;'>Message:</h3>
            <p style='line-height: 1.6; color: #374151;'>" . nl2br(htmlspecialchars($message)) . "</p>
        </div>

        <div style='margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 5px; font-size: 12px; color: #6b7280;'>
            <p style='margin: 0;'>Sent from: BIZmaster Contact Form</p>
            <p style='margin: 0;'>Date: " . date('Y-m-d H:i:s') . "</p>
            <p style='margin: 0;'>Reply directly to this email to respond to $firstName.</p>
        </div>
    </body>
    </html>
    ";
    
    // Try to send the email
    if (mail($to, $subject, $htmlBody, $headers)) {
        echo json_encode([
            'success' => true, 
            'message' => 'Email sent successfully to ukrush12@gmail.com',
            'data' => [
                'to' => $to,
                'from' => "$firstName $lastName <$email>",
                'subject' => $subject
            ]
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'error' => 'Failed to send email',
            'fallback' => 'Use mailto link'
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
}
?>