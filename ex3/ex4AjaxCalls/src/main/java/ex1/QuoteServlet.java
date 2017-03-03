/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ex1;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Yousinho
 */
@WebServlet(name = "NewServlet", urlPatterns = {"/NewServlet"})
public class QuoteServlet extends HttpServlet {
    Gson gson = new Gson();
    
private List<Quote> quotes = new ArrayList<Quote>(){

    {
       

    
   add(new Quote("Every burden is a blessing."," Walt Kelly"));
   add(new Quote("Love is an energy which exists of itself. It is its own value","Thornton Wilder"));
   add(new Quote("Don't cry because it's over, smile because it happened.","Dr. Seuss"));
   add(new Quote("Be yourself; everyone else is already taken."," Oscar Wilde"));
   add(new Quote("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. "," Albert Einstein"));
   add(new Quote("So many books, so little time. "," Frank Zappa"));
   add(new Quote("A room without books is like a body without a soul.","Marcus Tullius Cicero"));
    }
    
};
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
     
            int ranIndex = new Random().nextInt(quotes.size()-1);
            String gsonList = gson.toJson(quotes.get(ranIndex));

            out.println(gsonList);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
