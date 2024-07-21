<% if $LastEdited %>
    <p class="page-utilities-last-modified">
<%--        <%t CWP\\CWP\\PageTypes\\BasePage.LastModified "Last modified" %>: <time datetime="$LastEdited.Format(y-MM-dd)">{$LastEdited.Format(d MMMM y)}</time>--%>
        <%t SilverStripe\\CMS\Reports\\BrokenLinksReport.ColumnDateLastPublished "Last modified" %>: <time datetime="$LastEdited.Format(y-MM-dd)">{$LastEdited.Format(d MMMM y)}</time>
    </p>
<% end_if %>
